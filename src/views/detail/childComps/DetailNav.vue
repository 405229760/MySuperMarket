<template>
	<div>
		<nav-bar>
			<div slot='left' @click="backClick" class="detail-nav-left">
				<img src="~@/assets/img/common/back.svg">
			</div>
			<div slot='center' class="detail-nav-center">
				<div v-for="(item,index) in titles" :class="{active:currentIndex == index}" @click="itemClick(index)">{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	export default {
		name: "DetailNav",
		data() {
			return {
				titles: ['商品', '参数', '评论', '推荐'],
				isActive: false,
				currentIndex: 0,
			}
		},
		components: {
			NavBar,
		},
		methods: {
			itemClick(index) {
				this.changeCurrentIndex(index)
				this.$emit('detailNavClick', index)
			},
			backClick() {
				this.$router.back()
			},
			changeCurrentIndex(index) {
				this.currentIndex = index
			}
		}

	}
</script>

<style lang="less" scoped>
	.detail-nav-left {
		img {
			vertical-align: middle
		}
	}

	.detail-nav-center {
		display: flex;
		justify-content: space-evenly;

		.active {
			color: var(--color-high-text);
			font-weight: bold;
		}
	}
</style>
