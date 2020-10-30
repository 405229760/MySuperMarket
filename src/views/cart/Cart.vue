<template>
	<div id="cart">
		<nav-bar class="nav-bar">
			<div slot="center">购 物 车 ({{cartList.length}})</div>
		</nav-bar>
		<scroll class="cartScroll" ref='cartScroll'>
			<cart-list @imgCompleted='imgCompleted' :cartList='cartList' />
		</scroll>
		<cart-bottom-bar />
	</div>
</template>

<script>
	import {
		debounce
	} from '@/tools/jsTools.js'

	import NavBar from '@/components/common/navbar/NavBar.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'

	import CartList from './childComps/CartList.vue'
	import CartListItem from './childComps/CartListItem.vue'
	import CartBottomBar from './childComps/CartBottomBar.vue'

	export default {
		name: "Cart",
		data() {
			return {
				refreshScroll: null,
				cartList: []
			}
		},
		created() {
			this.refreshScroll = debounce(() => {
				this.$refs.cartScroll.myScrollRefresh()
			}, 100)

			// 存储vuex中的购物车数据
			this.cartList = this.$store.state.cartList
		},
		components: {
			NavBar,
			Scroll,
			CartList,
			CartListItem,
			CartBottomBar,
		},
		methods: {
			imgCompleted() {
				this.refreshScroll()
			}
		},
	}
</script>

<style lang="less" scoped>
	#cart {
		height: 100vh;
		position: relative;

		.nav-bar {
			background-color: var(--color-tint);
			color: white;
			font-weight: bold;
		}

		.cartScroll {
			position: absolute;
			left: 0;
			right: 0;
			top: 44px;
			bottom: 100px;
		}
	}
</style>
