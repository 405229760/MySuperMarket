<template>
	<!-- swiper会先初始化，再接到数据，就会初始化出一个没有数据的swiper
		 给swiper增加一个key值，获取到数据后，key值不同，就会删除原先的swiper，重新创建一个
		 这样就可以重新走一次组件中的mounted，在数据获取到之后再进行一次初始化
	-->
	<swiper :key='banners.length' :bannerlist='banners'>
	</swiper>
</template>

<script>
	import Swiper from '@/components/common/swiper/Swiper.vue'
	export default {
		name: "HomeSwiper",
		components: {
			Swiper,
		},
		props: {
			banners: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>
