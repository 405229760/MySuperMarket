<template>
	<div class="goodsitem">
		<img :src="goodsitem.show.img">
		<div class="goods-info">
			<p>{{goodsitem.title}}</p>
			<div class="sometext">
				<span class="price">￥{{goodsitem.price}}</span>
				<div class="cfav-item">
					<span>{{goodsitem.cfav}}</span>
					<span class="iconfont icon-favorites-fill"></span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodsItem",
		props: {
			goodsitem: Object
		}
	}
</script>

<style lang="less" scoped>
	.goodsitem {
		width: 46%;
		padding-bottom: 40px;
		position: relative;
		text-overflow: ellipsis;

		img {
			width: 100%;
		}

		.goods-info {
			position: absolute;
			width: 100%;

			p {
				font-size: 14px;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			.sometext {
				display: flex;
				line-height: 20px;

				.price {
					color: var(--color-tint);
					font-weight: bold;
					flex: 1;
					margin-left: 8px;
				}

				.cfav-item {
					margin-right: 8px;
				}
			}
		}
	}
</style>
