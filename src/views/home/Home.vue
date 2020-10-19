<template>
	<div id="home">
		<swiper :key="banners.length" :banners='banners'></swiper>
	</div>
</template>

<script>
	import {
		getHomeData
	} from '@/network/home'
	import Swiper from '@/components/common/swiper/Swiper.vue'
	export default {
		name: 'Home',
		data() {
			return {
				banners: []
			}
		},
		components: {
			Swiper,
		},
		created() {
			getHomeData().then(res => {
				this.banners = res.data.data.banner.list
			})
		}
	}
</script>
