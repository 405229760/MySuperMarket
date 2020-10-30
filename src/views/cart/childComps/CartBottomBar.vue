<template>
	<div id="car-bottom-bar">
		<div class="bar-text">
			<div class="all-pick">
				<span class="iconfont icon-check1 all-pick-icon"></span>
				<span class="all-pick-text">全选</span>
			</div>
			<div class="total-price">合计:￥1000</div>
		</div>
		<div class="go-pay" @click="goPayClick">去结算()</div>
	</div>
</template>

<script>
	export default {
		name: "CartBottomBar",
		methods: {
			goPayClick() {
				console.log('结账')
			}
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
					color: gray;
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
