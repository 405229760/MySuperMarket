<template>
	<div>
		<cart-list-item v-for="(item,index) in cartList" :goodsInfo='item' @imgCompleted='imgCompleted' :key='item.iid' />
	</div>
</template>

<script>
	import CartListItem from './CartListItem.vue'

	import {
		mapGetters
	} from 'vuex'

	export default {
		name: "CartList",
		props: {
			cartList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		components: {
			CartListItem,
		},
		methods: {
			imgCompleted() {
				this.$emit('imgCompleted')
			}
		},
	}
</script>

<style lang="less" scoped>

</style>
