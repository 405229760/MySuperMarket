<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(tab,index) in tablist" :class="{active:index==currentIndex}" @click="tabControlItemClick(index)">
			<span>{{tab}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		data() {
			return {
				currentIndex: 0
			}
		},
		props: {
			tablist: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			tabControlItemClick(index) {
				this.$emit('tabControlClick', index)
			},
			setActive(index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab-control {
		display: flex;
		height: 50px;
		width: 100%;
		// background-color: orangered;
		text-align: center;
		line-height: 50px;
		font-size: 16px;
		background-color: #fff;
		border-bottom: 1px solid #EEEEEE;

		.tab-control-item {
			flex: 1;

			span {
				padding: 5px;

			}
		}

		.active {
			color: var(--color-high-text);

			span {
				border-bottom: 3px solid var(--color-tint);
				font-weight: bold;
			}
		}

	}
</style>
