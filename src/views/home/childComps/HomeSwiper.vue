<template>
	<swiper :key='banners.length' class="home-swiper">
		<div class="swiper-slide" v-for="item in banners">
			<img :src="item.image" @load='swiperImgLoad'>
		</div>
	</swiper>
</template>

<script>
	import Swiper from '@/components/common/swiper/Swiper.vue'
	export default {
		name: 'HomeSwiper',
		data() {
			return {
				isload: false
			}
		},
		props: {
			banners: {
				type: Array,
				default () {
					return []
				}
			}
		},
		components: {
			Swiper,
		},
		methods: {
			swiperImgLoad() {
				if (!this.isload) {
					this.$emit('swiperImgCompleted')
					this.isload = true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.home-swiper {
		div {
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
