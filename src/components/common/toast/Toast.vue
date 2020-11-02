<template>
	<div class="toast" v-show="isShow">
		<span>{{message}}</span>
	</div>
</template>

<script>
	import {
		debounce
	} from '@/tools/jsTools.js'

	export default {
		name: "Toast",
		data() {
			return {
				message: '',
				isShow: false,
				show: null,
			}
		},
		created() {
			this.show = debounce((message, duration = 2000) => {
				this.message = message;
				this.isShow = true;

				setTimeout(() => {
					this.isShow = false
				}, duration)
			}, 100);
		},
	}
</script>

<style lang="less" scoped>
	.toast {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-weight: bold;

		span {
			padding: 10px 10px;
			background-color: rgba(0, 0, 0, .7);
			color: white;
		}
	}
</style>
