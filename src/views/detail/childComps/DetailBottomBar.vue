<template>
	<div class="detail-bottom">
		<div class="bar-left">
			<div>
				<div class="icon">
					<img class="service" src='~@/assets/img/detail/detail_bottom.png'>
				</div>
				<p>客服</p>
			</div>
			<div>
				<div class="icon">
					<img class="shop" src='~@/assets/img/detail/detail_bottom.png'>
				</div>
				<p>店铺</p>
			</div>
			<div>
				<div class="icon">
					<img class="collect" src='~@/assets/img/detail/detail_bottom.png'>
				</div>
				<p>收藏</p>
			</div>
		</div>
		<div class="bar-right">
			<div class="cart" @click="cartClick">加入购物车</div>
			<div class="buy">购 买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailBottomBar',
		methods: {
			cartClick() {
				this.$emit('cartClick')
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail-bottom {
		display: flex;
		height: 50px;
		width: 100%;
		background-color: red;
		box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);

		.bar-left {
			flex: 1;
			display: flex;
			background-color: white;
			justify-content: space-around;

			div {
				text-align: center;

				.icon {
					overflow: hidden;
					height: 22px;
					width: 22px;
					position: relative;
					left: 3px;
					margin: 5px 0 5px 0;

					img {
						width: 100%;
						position: relative;
					}

					.service {
						top: -53px;

					}

					.shop {
						top: -98px;
					}

					.collect {}
				}

				p {
					font-size: 13px;
				}
			}
		}

		.bar-right {
			flex: 1;
			display: flex;
			text-align: center;
			line-height: 50px;
			color: white;
			font-weight: bold;
			font-size: 16px;

			.cart {
				flex: 1;
				background-color: orange;
			}

			.buy {
				flex: 1;
				background-color: var(--color-tint);
			}
		}


	}
</style>
