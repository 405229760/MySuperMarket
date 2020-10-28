<template>
	<div class="swiper-container myswiper">
		<div class="swiper-wrapper">
			<slot></slot>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

		<!-- 如果需要导航按钮 -->
		<!-- <div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div> -->

		<!-- 如果需要滚动条 -->
		<!-- <div class="swiper-scrollbar"></div> -->
	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default {
		name: 'Swiper',
		props: {
			banners: {
				type: Array,
				default () {
					return []
				}
			}
		},
		mounted() {
			// console.log('swiper', this.banners[0].image);
			// 这里的类名最好用自定义的，防止和其他人冲突
			new Swiper('.myswiper', {
				loop: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				// 如果需要自动播放
				autoplay: {
					delay: 2000,
					//是否停留在最后一张
					stopOnLastSlide: false,
					//操作后不会继续轮播
					disableOnInteraction: false,
				},
				// 如果需要前进后退按钮
				// navigation: {
				// 	nextEl: '.swiper-button-next',
				// 	prevEl: '.swiper-button-prev',
				// },
				// 如果需要滚动条
				// scrollbar: {
				//   el: '.swiper-scrollbar',
				// },
			})
		}
	}
</script>
