<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot='center'>购物街</div>
		</nav-bar>
		<tab-control :tablist="['流行','新款','精选']" class="home-tab-control" ref='hometabcontrol1' @tabControlClick='tabControlClick'
		 v-show="isShowFakeTabControl" />
		<scroll class="homeScroll" ref='homeScroll' @scrollPosition='scrollPosition' @scrollPullUp='scrollPullUp' :probe-type='3'
		 :pull-up-load='true'>
			<home-swiper :banners='banners' @swiperImgCompleted='imgCompleted' />
			<recommend-view :recommends="recommends" @recommendImgCompleted='imgCompleted' />
			<feature-view class="feature" @featureImgCompleted='imgCompleted' />
			<tab-control :tablist="['流行','新款','精选']" ref='hometabcontrol0' @tabControlClick='tabControlClick' />
			<!-- <goods-list :goodslist="showGoodsType" /> -->
			<home-goods-list :goodslist="showGoodsType" @goodsListCompleted='goodsListCompleted' />
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
	import {
		debounce
	} from '@/tools/jsTools.js'
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import TabControl from '@/components/common/tabcontrol/TabControl.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'

	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeGoodsList from './childComps/HomeGoodsList.vue'

	// import GoodsList from '@/components/content/goods/GoodsList.vue'
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
				isShowFakeTabControl: false,
				tabControlOffsetTop: 0,
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
			RecommendView,
			FeatureView,
			HomeSwiper,
			TabControl,
			Scroll,
			HomeGoodsList,
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
		// mounted() {
		// 	const refresh = debounce(this.$refs.homeScroll.myScrollRefresh, 100);
		// 	// 监听goodsItem中的图片是否加载完成
		// 	this.$bus.$on('goodsItemImgCompleted', () => {
		// 		refresh()
		// 	})
		// 	// console.log(this.showGoodsType)
		// },
		computed: {
			showGoodsType() {
				return this.goods[this.goodsType[this.currentType]].list
			}
		},
		methods: {
			/* 
				其他
			*/
			goodsListCompleted() {
				this.$refs.homeScroll.myScrollRefresh()
			},
			tabControlClick(index) {
				this.currentType = index;
				this.$refs.hometabcontrol0.setActive(index);
				this.$refs.hometabcontrol1.setActive(index);
			},
			backTopClick() {
				this.$refs.homeScroll.myScrollTo(0, 0)
			},
			scrollPosition(positon) {
				// 是否显示backTop
				this.isShowBackTop = (-positon.y) > 1000
				// 是否显示假tabControl
				this.isShowFakeTabControl = (-positon.y) >= this.tabControlOffsetTop
			},
			scrollPullUp() {
				console.log('上拉加载更多')
				this.getHomeGoods(this.currentType)
				this.$refs.homeScroll.myScrollFinishPullUp()
			},
			imgCompleted() {
				// 获取tabControl距离父组件顶端的距离
				this.tabControlOffsetTop = this.$refs.hometabcontrol0.$el.offsetTop;
				// console.log(this.tabControlOffsetTop);
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

		.home-tab-control {
			position: relative;
			left: 0;
			right: 0;
			top: 44px;
			z-index: 9;
		}

		.homeScroll {
			position: absolute;
			left: 0;
			right: 0;
			top: 44px;
			bottom: 50px;
		}
	}
</style>
