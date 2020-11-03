export default {
	/*
		注意，为了方便以后追踪调试，store中的功能尽可能要单一 
		将改值放入mutations，逻辑放入actions
		改不同的值用不同的方法
	*/
	cart_add_num(state, payload) {
		payload.num++
	},
	cart_sub_num(state, payload) {
		payload.num--
	},
	cart_add_new(state, payload) {
		state.cartList.push(payload)
	},
	cart_check_change(state, payload) {
		payload.isChecked = !payload.isChecked
	},
	cart_check_false(state, payload) {
		payload.isChecked = false
	},
	cart_check_true(state, payload) {
		payload.isChecked = true
	}
}
