<template>
		<tab-bar>
			<tab-bar-item path='/home'>
				<p slot='icon' class="iconfont icon-shouye"></p>
				<p slot='text'>首页</p>
			</tab-bar-item>
			<tab-bar-item path='/category'>
				<p slot='icon' class="iconfont icon-leimupinleifenleileibie2"></p>
				<p slot='text'>分类</p>
			</tab-bar-item>
			<tab-bar-item path='/cart'>
				<p slot='icon' class="iconfont icon-gouwuche"></p>
				<p slot='text'>购物车</p>
			</tab-bar-item>
			<tab-bar-item path='/profile'>
				<p slot='icon' class="iconfont icon-wodejianying"></p>
				<p slot='text'>档案</p>
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