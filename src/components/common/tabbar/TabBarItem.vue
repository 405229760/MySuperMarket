<template>
	<div class="tab-bar-item" @click="itemClick" :style="'color:' + itemColor + ';background:' + itemBg">
		<slot name="icon"></slot>
		<slot name="text"></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			activeColor: {
				type: String,
				default: 'red'
			},
			normalColor: {
				type: String,
				default: 'black'
			},
			activeBg: {
				type: String,
				default: 'lightgray'
			},
			normalBg: {
				type: String,
				default: 'white'
			}
		},
		computed: {
			itemActive() {
				// 判断当前激活路由路径是否包含该组件的路径
				return this.$route.path.indexOf(this.path) != -1
			},
			itemColor() {
				// 计算字体颜色
				return this.itemActive ? this.activeColor : this.normalColor
			},
			itemBg() {
				// 计算背景颜色
				return this.itemActive ? this.activeBg : this.normalBg
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
		padding: 7px;
	}
</style>
