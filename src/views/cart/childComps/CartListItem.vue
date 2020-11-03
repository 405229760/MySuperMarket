<template>
	<div class="cart-list-item" :style="'background:' + setListBg">
		<div class="item-left" @click="checkClick">
			<span class="iconfont pick-icon" :class="setIconClass"></span>
			<img :src="goodsInfo.img" @load='imgCompleted'>
		</div>
		<div class="item-right">
			<div @click="detailClick">
				<p class="item-title">{{goodsInfo.title}}</p>
				<p class="item-desc">{{goodsInfo.desc}}</p>
			</div>
			<div class="item-text">
				<div class="item-text-price">￥{{goodsInfo.price}}</div>
				<div class="item-text-num">
					<div class="iconfont icon-jjian- item-text-num-sub" @click="subClick"></div>
					<div class="item-text-num-num">{{goodsInfo.num}}</div>
					<div class="iconfont icon-jjia- item-text-num-add" @click="addClick"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CartListItem",
		props: {
			goodsInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		computed: {
			setListBg() {
				return this.goodsInfo.isChecked ? '#FFFFF0' : 'white'
			},
			setIconClass() {
				return this.goodsInfo.isChecked ? 'icon-check1 checked' : 'icon-weixuanzhong'
			}
		},
		methods: {
			imgCompleted() {
				this.$emit('imgCompleted')
			},
			checkClick() {
				this.$store.commit('cart_check_change', this.goodsInfo)
			},
			detailClick() {
				this.$router.push(
					'/detail/' + this.goodsInfo.iid,
				)
			},
			subClick() {
				if (this.goodsInfo.num > 1)
					this.$store.commit('cart_sub_num', this.goodsInfo)
			},
			addClick() {
				if (this.goodsInfo.num < 999)
					this.$store.commit('cart_add_num', this.goodsInfo)
			}
		}
	}
</script>

<style lang="less" scoped>
	.cart-list-item {
		display: flex;
		height: 170px;
		width: 100%;
		padding: 10px 0;
		border-bottom: 1px gray solid;

		.item-left {
			display: flex;
			width: 140px;
			height: 150px;

			span {
				text-align: center;
				width: 30px;
				line-height: 150px;
				font-size: 18px;
				margin: 0px 5px;
				color: lightgray;
			}

			.checked {
				color: var(--color-high-text);
				font-size: 30px;
			}

			img {
				width: 100px;
				height: 150px;
				border-radius: 6px;
			}
		}

		.item-right {
			padding: 0 10px;
			width: calc(100% - 140px);

			div {
				.item-title {
					width: 100%;
					// 不换行
					white-space: nowrap;
					// 溢出显示省略号
					overflow: hidden;
					text-overflow: ellipsis;
					font-weight: bold;
					margin-top: 5px;
					margin-bottom: 40px;
					font-size: 20px;
				}

				.item-desc {
					width: 100%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					margin-bottom: 40px;
					color: gray;
					font-size: 16px;
				}
			}


			.item-text {
				display: flex;
				justify-content: space-between;

				.item-text-price {
					font-size: 20px;
					font-weight: bold;
					color: darkorange;
				}

				.item-text-num {
					font-weight: bold;
					font-size: 20px;
					width: 100px;
					display: flex;
					text-align: center;
					line-height: 30px;

					.item-text-num-num {
						align-self: center;
						width: 50px;
					}

					.item-text-num-sub {
						width: 30px;
						color: black;
					}

					.item-text-num-add {
						width: 30px;
						color: black;
					}
				}
			}

		}

	}
</style>
