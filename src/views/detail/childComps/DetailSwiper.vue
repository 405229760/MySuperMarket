<template>
	<swiper :key='banners.length' class="detail-swiper">
		<div class="swiper-slide" v-for="item in banners">
			<img :src="item" @load='imgLoad'>
		</div>
	</swiper>
</template>

<script>
	import Swiper from '@/components/common/swiper/Swiper.vue'
	export default {
		name: 'DetailSwiper',
		data() {
			return {
				isload: false,
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
			imgLoad() {
				if (!this.isload) {
					this.$emit('detailSwiperImgCompleted')
					this.isload = true
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail-swiper {
		width: 100%;
		height: 350px;
		overflow: hidden;
	}
</style>
