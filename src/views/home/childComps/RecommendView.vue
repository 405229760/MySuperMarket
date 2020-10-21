<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommends: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.recommend {
		display: flex;
		text-align: center;
		padding: 10px 0 15px;
		font-size: 14px;
		border-bottom: 5px solid #EEEEEE;
		.recommend-item {
			flex: 1;

			img {
				width: 80%;
				height: 80%;
			}
		}
	}
</style>
