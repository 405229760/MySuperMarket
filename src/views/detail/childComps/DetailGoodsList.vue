<template>
	<div class="detail-goodslist">
		<goods-item v-for="item in newGoods" :goodsitem='item' @goodsItemImgCompleted="goodsItemImgCompleted" />
	</div>
</template>

<script>
	import GoodsItem from '@/components/content/goods/GoodsItem.vue'
	export default {
		name: "DetailGoodsList",
		components: {
			GoodsItem
		},
		data() {
			return {
				count: 0,
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
						title: x.title,
						price: x.price,
						collect: x.cfav,
						img: x.image,
						iid: x.item_id
					}
				})
				return goods
			}

		},
		methods: {
			goodsItemImgCompleted() {
				if (++this.count == this.goodslist.length)
					this.$emit('imgCompleted')
			}
		}
	}
</script>

<style scoped>
	.detail-goodslist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
