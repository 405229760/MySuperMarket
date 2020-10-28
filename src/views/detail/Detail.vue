<template>
	<div class="detail">
		<detail-nav class="detailNav" @detailNavClick='navClick' ref='detailNav' />
		<scroll class="detailScroll" ref="detailScroll" :probeType='3' @scrollPosition='scrollPosition'>
			<detail-swiper :banners='banners' @detailSwiperImgCompleted='imgCompleted' />
			<detail-goods-info :goods='goods' />
			<detail-sells-info :shop='shop' />
			<detail-show-img-info :showImgList='imgList' :showImgKey='imgKey' @detailShowImgCompleted='imgCompleted' />
			<detail-param-info :goodsParam='goodsParam' ref='detailParam' />
			<detail-comment-info :goodsComment='goodsComment' ref='detailComment' />
			<detail-goods-list :goodslist='goodsRecommendList' ref='detailGoodsList' />
		</scroll>
	</div>
</template>

<script>
	import {
		getDetailGoodsInfo,
		getRecommend,
		Goods,
		Shop,
		GoodsParam,
		GoodsComment,
	} from '@/network/detail.js'
	import {
		debounce
	} from '@/tools/jsTools.js'

	import DetailSwiper from './childComps/DetailSwiper.vue'
	import DetailNav from './childComps/DetailNav.vue'
	import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
	import DetailSellsInfo from './childComps/DetailSellsInfo.vue'
	import DetailShowImgInfo from './childComps/DetailShowImgInfo.vue'
	import DetailParamInfo from './childComps/DetailParamInfo.vue'
	import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
	import DetailGoodsList from './childComps/DetailGoodsList.vue'

	import Scroll from '@/components/common/scroll/Scroll.vue'

	export default {
		name: "Detail",
		data() {
			return {
				iid: null,
				banners: [],
				goods: {},
				shop: {},
				imgList: [],
				imgKey: null,
				goodsParam: {},
				goodsComment: {},
				goodsRecommendList: [],
				navScrollArray: [],
				getNavScroll: null,
				isScollListener: true,
				navCurrentIndex: 0,
			}
		},
		components: {
			DetailNav,
			DetailSwiper,
			DetailGoodsInfo,
			DetailSellsInfo,
			Scroll,
			DetailShowImgInfo,
			DetailParamInfo,
			DetailCommentInfo,
			DetailGoodsList,
		},
		created() {
			// 拿到传递过来的iid
			this.iid = this.$route.params.iid;
			// 请求商品数据
			this.getGoodsData();
			// 请求推荐信息
			this.getRecommendData();

			// 设置nav滚动距离
			this.getNavScroll = debounce(() => {
				this.navScrollArray = []
				this.navScrollArray.push(0)
				this.navScrollArray.push(this.$refs.detailParam.$el.offsetTop)
				this.navScrollArray.push(this.$refs.detailComment.$el.offsetTop)
				this.navScrollArray.push(this.$refs.detailGoodsList.$el.offsetTop)
				console.log('获取Detail中nav滚动距离', this.navScrollArray)
			}, 100);
		},
		mounted() {
			// const refresh = debounce(this.$refs.detailScroll.myScrollRefresh, 100);
			// // 监听goodsItem中的图片是否加载完成
			// this.$bus.$on('goodsItemImgCompleted', () => {
			// 	// console.log("detail bus")
			// 	refresh()
			// })
		},
		methods: {
			getGoodsData() {
				getDetailGoodsInfo(this.iid).then(res => {
					let data = res.data.result
					// 获取顶部轮播图数据
					this.banners = data.itemInfo.topImages
					// 获取商品信息
					this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
					// 获取店铺信息
					this.shop = new Shop(data.shopInfo)
					// 获取商品展示图片信息
					this.imgList = data.detailInfo.detailImage[0].list
					this.imgKey = data.detailInfo.detailImage[0].key
					// 获取商品参数信息
					this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
					// 获取评论信息
					this.goodsComment = new GoodsComment(data.rate)
				}).catch(err => {
					console.log('服务器没有物品数据', err)
					this.$router.back()
				})
			},
			getRecommendData() {
				getRecommend().then(res => {
					this.goodsRecommendList = res.data.data.list;
					console.log(this.goodsRecommendList)
				}).catch(err => {
					console.log('服务器没有推荐数据', err)
					this.$router.back()
				})
			},
			imgCompleted() {
				this.$refs.detailScroll.myScrollRefresh()
				this.getNavScroll()
			},
			navClick(index) {
				this.isScollListener = false
				this.$refs.detailScroll.myScrollTo(0, -this.navScrollArray[index], 500)
				setTimeout(() => {
					this.isScollListener = true
				}, 500)
			},
			scrollPosition(position) {
				let index = 0
				for (let i = this.navScrollArray.length - 1; i > 0; i--) {
					if (-position.y >= this.navScrollArray[i]) {
						index = i
						break
					}
				}
				if (this.isScollListener && this.navCurrentIndex != index) {
					this.navCurrentIndex = index
					this.$refs.detailNav.changeCurrentIndex(this.navCurrentIndex)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.detailNav {
		background-color: white;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
	}

	.detailScroll {
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 50px;
	}
</style>
