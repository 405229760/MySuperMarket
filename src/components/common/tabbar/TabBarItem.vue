<template>
	<div class="tab-bar-item" @click="itemClick" :style="itemStyle">
		<slot name="icon"></slot>
		<slot name="text"></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			activeStyle: {
				type: Object,
				default () {
					return {
						color: 'red',
						background: 'lightgray',
						fontWeight: 'bold'
					}
				}
			},
			normalStyle: {
				type: Object,
				default () {
					return {
						color: 'black',
						background: 'white',
						fontWeight: 'normal'
					}
				}
			}
		},
		computed: {
			itemActive() {
				// 判断当前激活路由路径是否包含该组件的路径
				return this.$route.path.indexOf(this.path) != -1
			},
			itemStyle() {
				return this.itemActive ? this.activeStyle : this.normalStyle;
			}
		},
		methods: {
			itemClick() {
				// 点击切换路由路径
				if (this.$route.path != this.path) {
					this.$router.push(this.path)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab-bar-item {
		flex: 1;
		height: 100%;
		text-align: center;
		padding: 4px;
	}
</style>
