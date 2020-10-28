<template>
	<div>
		<div class="goods-info">
			<div class="goods-title">{{goods.title}}</div>
			<span class="goods-newprice">￥{{goods.nowPrice}}</span>
			<span class="goods-oldprice"><del>{{goods.oldPrice}}</del></span>
			<span :style="'background:' + goods.discountBgColor" class="discount">{{goods.discountDesc}}</span>
			<div class="goods-sell">
				<span v-for="item in goods.columns">{{item}}</span>
			</div>
			<div class="goods-service">
				<div v-for="service in goods.services" class="service-info">
					<img src="~@/assets/img/detail/service.png" class="service-icon">
					<span class="service-text">{{service.name}}</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		Goods
	} from '@/network/detail.js'
	export default {
		name: 'DetailGoodsInfo',
		props: {
			goods: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		mounted() {
			let services = this.goods.services;
			let param = services % 3;
			if (param > 0) {

			}
		}
	}
</script>

<style lang="less" scoped>
	.goods-info {
		.goods-title {
			font-weight: bold;
			margin: 5px;
		}

		.goods-newprice {
			font-weight: bold;
			font-size: 26px;
			color: var(--color-high-text);
			margin: 5px;
		}

		.goods-oldprice {
			position: relative;
			color: gray;
			margin: 5px;
			font-size: 14px;
			font-weight: bold;
		}

		.discount {
			position: absolute;
			padding: 5px 5px;
			border-radius: 10px;
			color: white;
			font-weight: bold;
			font-size: 10px;
		}

		.goods-sell {
			display: flex;
			margin: 20px 10px 0 10px;
			padding-bottom: 10px;
			color: gray;
			font-size: 14px;
			justify-content: space-between;
			box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
		}

		.goods-service {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			flex-direction: row;
			padding: 10px;
			box-shadow: 0 5px 1px rgba(100,100,100,.1);
			&::after {
				content: '';
				flex: auto;
			}

			.service-info {
				width: 33.33%;
				margin: 5px 0;

				.service-icon {
					width: 14px;
					height: 14px;
				}

				.service-text {
					display: inline-block;
					font-size: 14px;
				}
			}
		}
	}
</style>
