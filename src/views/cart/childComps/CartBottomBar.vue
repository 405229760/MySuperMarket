<template>
	<div id="car-bottom-bar">
		<div class="bar-text">
			<div class="all-pick" @click="allPickClick">
				<!-- icon-check1 checked -->
				<span class="iconfont all-pick-icon" :class="allPickstate?'icon-check1 checked':'icon-weixuanzhong'"></span>
				<span class="all-pick-text">全选</span>
			</div>
			<div class="total-price">合计:￥{{totalPrice}}</div>
		</div>
		<div class="go-pay" @click="goPayClick">去结算({{checkNum}})</div>
	</div>
</template>

<script>
	export default {
		name: "CartBottomBar",
		data() {
			return {
				cartList: []
			}
		},
		created() {
			this.cartList = this.$store.state.cartList
		},
		methods: {
			goPayClick() {
				if (this.checkNum == 0)
					this.$toast.show('请选择商品')
				else
					this.$toast.show('结账功能暂无')
			},
			allPickClick() {
				if (this.cartList.length == 0)
					return
				if (this.allPickstate) {
					// 设置所有不全选
					for (let item of this.cartList) {
						if (item.isChecked) {
							this.$store.commit('cart_check_false', item)
						}
					}
				} else {
					// 设置所有全选
					for (let item of this.cartList) {
						if (!item.isChecked) {
							this.$store.commit('cart_check_true', item)
						}
					}
				}
			}
		},
		computed: {
			checkNum() {
				let num = 0;
				for (let i = 0; i < this.cartList.length; i++) {
					if (this.cartList[i].isChecked) {
						num++
					}
				}
				return num
			},
			totalPrice() {
				let price = 0
				for (let i = 0; i < this.cartList.length; i++) {
					if (this.cartList[i].isChecked) {
						price += this.cartList[i].price * this.cartList[i].num
					}
				}
				return price
			},
			allPickstate() {
				let isAllPick = true
				for (let item of this.cartList) {
					if (!item.isChecked) {
						isAllPick = false
						break
					}
				}
				if (this.cartList.length == 0)
					isAllPick = false
				return isAllPick
			},
		}
	}
</script>

<style lang="less" scoped>
	#car-bottom-bar {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 50px;
		display: flex;
		height: 50px;
		background-color: lightgray;
		line-height: 50px;
		// padding-left: 10px;

		.bar-text {
			flex: 2;
			display: flex;

			.all-pick {
				width: 100px;
				padding: 0 10px;
				// background-color: red;

				.all-pick-icon {
					margin-right: 5px;
					font-size: 20px;
				}

				.checked {
					color: var(--color-high-text);
				}

				.all-pick-text {}
			}

			.total-price {
				// background-color: blue;
			}
		}

		.go-pay {
			text-align: center;
			flex: 1;
			background-color: orangered;
			color: white;
		}
	}
</style>
