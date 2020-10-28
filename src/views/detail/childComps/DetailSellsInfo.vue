<template>
	<div class="sells-info">
		<div class="seller-base">
			<img :src="shop.logo">
			<span>{{shop.name}}</span>
		</div>
		<div class="other-info">
			<div class="goods-sell-info">
				<div>
					<p class="sell-num">{{textNum(shop.sells)}}</p>
					<p class="sell-text">总销量</p>
				</div>
				<div>
					<p class="sell-num">{{textNum(shop.goodsCount)}}</p>
					<p class="sell-text">全部宝贝</p>
				</div>
			</div>
			<div class="other-border"></div>
			<ul class="goods-dec">
				<li v-for='item in shop.score'>
					<span class="score-name">{{item.name}}</span>
					<span class="score-num" :style="'color:'+(item.isBetter?'red':'limegreen')">{{item.score}}</span>
					<span class="score-text" :class="item.isBetter?'high-score':'low-score'">{{item.isBetter?'高':'低'}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailSellsInfo",
		props: {
			shop: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {
			textNum(num) {
				let newNum = null
				if (num < 10000) {
					newNum = num
				} else if (num > 10000) {
					newNum = (num / 10000).toFixed(1) + '万'
				} else if (num > 100000000) {
					newNum = (num / 100000000).toFixed(1) + '亿'
				} else if (num > 1000000000000) {
					(num / 1000000000000).toFixed(1) + '万亿'
				} else {
					newNum = '超亿亿'
				}
				return newNum
			},
		}
	}
</script>

<style lang="less" scoped>
	.sells-info {
		height: 200px;
		padding: 13px 0 0 10px;
		box-shadow: 0 5px 1px rgba(100, 100, 100, .2);
		margin-top: 20px;

		.seller-base {
			img {
				width: 80px;
				height: 80px;
				float: left;
				margin-right: 10px;
				border-radius: 50%;
			}

			span {

				display: block;
				line-height: 80px;
				float: left;
				font-size: 20px;
			}
		}

		.other-info {
			height: 80px;
			clear: both;
			display: flex;
			justify-content: space-evenly;

			.goods-sell-info {
				width: 50%;
				display: flex;
				justify-content: space-around;
				margin: 5px 0 0 5px;
				text-align: center;

				.sell-num {
					font-weight: bold;
					font-size: 20px;
					margin-top: 5px;
					margin-bottom: 10px;
				}

				.sell-text {
					font-size: 14px;
				}
			}

			.other-border {
				width: 1px;
				box-shadow: 1px 0 1px rgba(100, 100, 100, .2);
			}

			.goods-dec {
				width: 50%;
				margin: 0 10px 0 10px;
				display: flex;
				justify-content: space-evenly;
				flex-direction: column;

				li {
					list-style: none;
					display: flex;

					.score-name {
						flex: 3;
					}

					.score-num {
						flex: 2;
					}

					.high-score {
						background-color: limegreen;
						color: white;
					}

					.low-score {
						background-color: red;
						color: white;
					}
				}
			}
		}
	}
</style>
