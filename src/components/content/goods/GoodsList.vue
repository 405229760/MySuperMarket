<template>
	<div class="goodslist">
		<goods-item v-for="item in goodslist" :goodsitem='item' />
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem.vue'
	export default {
		name: "GoodsList",
		components: {
			GoodsItem
		},
		props: {
			goodslist: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>

<style scoped>
	.goodslist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
