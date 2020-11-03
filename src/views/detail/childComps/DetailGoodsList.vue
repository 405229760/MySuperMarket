<template>
	<div class="detail-goodslist">
		<goods-item v-for="(item,index) in newGoods" :goodsitem='item' @goodsItemImgCompleted="goodsItemImgCompleted" :key='index' />
	</div>
</template>

<script>
	import {
		debounce
	} from '@/tools/jsTools.js'
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
		created() {
			this.imgCompleted = debounce(() => {
				this.$emit('goodsListCompleted')
			}, 100)
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
				this.imgCompleted()
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
