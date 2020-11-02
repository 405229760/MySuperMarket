export default {
	addToCart(context, payload) {
		return new Promise((resolve, reject) => {
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
				resolve('当前的商品数量+1')
			} else {
				context.commit('cart_add_new', payload)
				resolve('添加新的商品')
			}
		})
	},
}
