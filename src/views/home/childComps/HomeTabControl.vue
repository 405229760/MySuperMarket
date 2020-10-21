<template>
	<tab-control :tablist="['流行','新款','精选']"></tab-control>
</template>

<script>
	import TabControl from '@/components/common/tabcontrol/TabControl.vue'
	export default {
		name: "HomeTabConTrol",
		components: {
			TabControl,
		}
	}
</script>

<style>
</style>
