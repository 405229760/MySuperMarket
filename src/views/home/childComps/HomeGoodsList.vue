<template>
	<div class="home-goodslist">
		<goods-item v-for="item in newGoods" :goodsitem='item' @goodsItemImgCompleted="goodsItemImgCompleted" />
	</div>
</template>

<script>
	import GoodsItem from '@/components/content/goods/GoodsItem.vue'
	export default {
		name: "HomeGoodsList",
		components: {
			GoodsItem
		},
		data() {
			return {
				count: 0
			}
		},
		props: {
			goodslist: {
				type: Array,
				default () {
					return []
				}
			}
		},
		computed: {
			newGoods() {
				let goods = this.goodslist.map(x => {
					return {
						iid: x.iid,
						title: x.title,
						price: x.price,
						collect: x.cfav,
						img: x.show.img
					}
				})
				return goods
			}
		},
		methods: {
			goodsItemImgCompleted() {
				if (++this.count == this.goodslist.length)
					this.$emit('goodsListCompleted')
			}
		}
	}
</script>

<style scoped>
	.home-goodslist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
