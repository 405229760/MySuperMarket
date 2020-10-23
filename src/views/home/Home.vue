<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot='center'>购物街</div>
		</nav-bar>
		<scroll class="homeScroll" ref='homeScroll' @scrollPosition='scrollPosition' @scrollPullUp='scrollPullUp' :probe-type='3'
		 :pull-up-load='true'>
			<swiper :key="banners.length" :banners='banners' />
			<recommend-view :recommends="recommends" />
			<feature-view class="feature" />
			<tab-control :tablist="['流行','新款','精选']" class="home-tab-control" @tabControlClick='tabControlClick' />
			<goods-list :goodslist="showGoodsType" />
		</scroll>
		<!-- 组件增加原生监听需要.native -->
		<back-top @click.native='backTopClick' v-show="isShowBackTop" />
	</div>
</template>

<script>
	import {
		getHomeBannersData,
		getHomeGoodsData
	} from '@/network/home'
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import Swiper from '@/components/common/swiper/Swiper.vue'
	import TabControl from '@/components/common/tabcontrol/TabControl.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'

	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'

	import GoodsList from '@/components/content/goods/GoodsList.vue'
	import BackTop from '@/components/content/backtop/BackTop.vue'

	export default {
		name: 'Home',
		data() {
			return {
				banners: [],
				recommends: [],
				goodsType: ['pop', 'new', 'sell'],
				currentType: 0,
				isShowBackTop: false,
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				}
			}
		},
		components: {
			NavBar,
			Swiper,
			RecommendView,
			FeatureView,
			TabControl,
			Scroll,
			GoodsList,
			BackTop,

		},
		created() {
			// 请求轮播图数据
			this.getHomeBanners();
			// 请求商品数据
			this.getHomeGoods(0);
			this.getHomeGoods(1);
			this.getHomeGoods(2);
		},
		mounted() {
			// 监听goodsItem中的图片是否加载完成
			this.$bus.$on('goodsItemImgCompleted', () => {
				console.log("刷新scroll")
				this.$refs.homeScroll.myScrollRefresh()
			})
		},
		computed: {
			showGoodsType() {
				return this.goods[this.goodsType[this.currentType]].list
			}
		},
		methods: {
			/* 
				其他
			*/
			tabControlClick(index) {
				this.currentType = index
			},
			backTopClick() {
				this.$refs.homeScroll.myScrollTo(0, 0)
			},
			scrollPosition(positon) {
				this.isShowBackTop = (-positon.y) > 1000
			},
			scrollPullUp() {
				console.log('上拉加载更多')
				this.getHomeGoods(this.currentType)
				this.$refs.homeScroll.myScroll.finishPullUp()
			},
			/* 
				网络请求相关
			*/
			getHomeBanners() {
				getHomeBannersData().then(res => {
					this.banners = res.data.data.banner.list
					this.recommends = res.data.data.recommend.list
				})
			},
			getHomeGoods(index) {
				let type = this.goodsType[index];
				this.goods[type].page += 1;
				getHomeGoodsData(type, this.goods[type].page).then(res => {
					// push的...用法
					this.goods[type].list.push(...res.data.data.list);
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	#home {
		height: 100vh;
		position: relative;

		.home-nav {
			background-color: var(--color-tint);
			color: white;
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			z-index: 10;
		}

		.homeScroll {
			position: absolute;
			left: 0;
			right: 0;
			top: 44px;
			bottom: 50px;

			.home-tab-control {
				// 粘性定位
				position: sticky;
				top: 44px;
				z-index: 9;
			}
		}
	}
</style>
