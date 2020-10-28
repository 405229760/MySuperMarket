<template>
	<div id="app">
		<!-- keep-alive排除Detail -->
		<keep-alive exclude="Detail">
			<router-view :key='$route.fullPath' />
		</keep-alive>
		<main-tab-bar v-show="showTabBar" />
	</div>
</template>

<script>
	import MainTabBar from '@/components/content/maintabbar/MainTabBar.vue'
	export default {
		name: 'App',
		computed: {
			showTabBar() {
				return this.$route.path.indexOf('detail') == -1
			}
		},
		components: {
			MainTabBar,
		},
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>
