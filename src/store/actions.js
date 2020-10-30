export default {
	addToCart(context, payload) {
		let oldProduct = null
		// 查询现有购物车里是否有该商品，如果有则赋给oldProduct
		for (let item of context.state.cartList) {
			if (item.iid == payload.iid) {
				oldProduct = item
				break
			}
		}
		// 如果已有，则数量+1，没有则push
		if (oldProduct) {
			context.commit('cart_add_num', oldProduct)
		} else {
			context.commit('cart_add_new', payload)
		}
	},
}
