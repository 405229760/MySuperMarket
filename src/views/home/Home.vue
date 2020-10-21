<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot='center'>购物街</div>
		</nav-bar>
		<swiper :key="banners.length" :banners='banners'></swiper>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view class="feature"></feature-view>
		<home-tab-control class="home-tab-control"></home-tab-control>
		<goods-list :goodslist="goods['pop'].list"></goods-list>
	</div>
</template>

<script>
	import {
		getHomeBannersData,
		getHomeGoodsData
	} from '@/network/home'
	import NavBar from '@/components/common/navbar/NavBar.vue'

	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import HomeTabControl from './childComps/HomeTabControl.vue'

	import GoodsList from '@/components/content/goods/GoodsList.vue'

	import Swiper from '@/components/common/swiper/Swiper.vue'

	export default {
		name: 'Home',
		data() {
			return {
				banners: [],
				recommends: [],
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
			HomeTabControl,
			GoodsList,
			Swiper,
		},
		created() {
			// 请求轮播图数据
			this.getHomeBanners();
			// 请求商品数据
			this.getHomeGoods('pop');
			this.getHomeGoods('new');
			this.getHomeGoods('sell');
		},
		methods: {
			getHomeBanners() {
				getHomeBannersData().then(res => {
					this.banners = res.data.data.banner.list
					this.recommends = res.data.data.recommend.list
				})
			},
			getHomeGoods(type) {
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
		padding-top: 44px;
		padding-bottom: 100px;

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
			// 粘性定位
			position: sticky;
			top: 44px;
			z-index: 9;
		}
	}
</style>
