<template>
	<tab-bar>
		<tab-bar-item path='/home'>
			<p slot='icon' class="iconfont icon-home tabbaricon"></p>
			<p slot='text' class="tabbartext">首页</p>
		</tab-bar-item>
		<!-- <tab-bar-item path='/category'>
				<p slot='icon' class="iconfont icon-all tabbaricon"></p>
				<p slot='text' class="tabbartext">分类</p>
			</tab-bar-item> -->
		<tab-bar-item path='/cart'>
			<p slot='icon' class="iconfont icon-cart-full tabbaricon"></p>
			<p slot='text' class="tabbartext">购物车</p>
		</tab-bar-item>
		<tab-bar-item path='/profile'>
			<p slot='icon' class="iconfont icon-usercenter tabbaricon"></p>
			<p slot='text' class="tabbartext">档案</p>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from '@/components/common/tabbar/TabBar.vue'
	import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style lang="less" scoped>
	.tabbaricon {
		font-size: 24px;
	}

	.tabbartext {
		font-size: 12px;
	}
</style>
