<template>
	<div class="home-goodslist">
		<goods-item v-for="(item,index) in newGoods" :goodsitem='item' @goodsItemImgCompleted="goodsItemImgCompleted" :key='goodsType + index' />
	</div>
</template>

<script>
	import {
		debounce
	} from '@/tools/jsTools.js'
	import GoodsItem from '@/components/content/goods/GoodsItem.vue'
	export default {
		name: "HomeGoodsList",
		components: {
			GoodsItem
		},
		data() {
			return {
				imgCompleted: null
			}
		},
		props: {
			goodslist: {
				type: Array,
				default () {
					return []
				}
			},
			goodsType: {
				type: String,
				default: ''
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
				this.imgCompleted()
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
