<template>
	<div class="goods-param">
		<table class="size-table">
			<tr class="size-table-tr" v-for='item in goodsParam.sizes'>
				<td v-for='(size,index) in item' :class="{'first-td':index==0}">{{size}}</td>
			</tr>
		</table>
		<table class="info-table">
			<tr class="info-table-tr" v-for='item in goodsParam.infos'>
				<td class="info-table-td-0">{{item.key}}</td>
				<td class="info-table-td-1">{{item.value}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: "DetailParamInfo",
		props: {
			goodsParam: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods-param {
		width: 100%;
		padding: 10px 40px 20px 10px;
		box-shadow: 0 5px 1px rgba(100, 100, 100, .2);

		.size-table {
			width: 100%;

			.size-table-tr {
				display: flex;
				justify-content: space-between;
				font-size: 16px;
				line-height: 40px;
				box-shadow: 0 1px 1px rgba(100, 100, 100, .2);

				.first-td {
					font-weight: bold;
				}
			}
		}

		.info-table {
			width: 100%;

			.info-table-tr {
				font-size: 16px;
				line-height: 40px;
				box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
				display: flex;

				.info-table-td-0 {
					font-weight: bold;
					flex: 1;
				}

				.info-table-td-1 {
					color: var(--color-high-text);
					flex: 2;
				}
			}
		}
	}
</style>
