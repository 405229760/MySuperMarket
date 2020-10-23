<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" @load='recommendImgLoad'>
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		data() {
			return {
				isload: false
			}
		},
		props: {
			recommends: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			recommendImgLoad() {
				if (!this.isload) {
					this.$emit('recommendImgCompleted');
					this.isload = true;
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
