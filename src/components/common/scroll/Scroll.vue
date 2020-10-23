<template>
	<div class="wrapper" ref='wrapper'>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: "Scroll",
		props: {
			probeType: {
				type: Number,
				default: 3
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				myScroll: null
			}
		},
		// updated() {
		// 	this.myScroll.refresh()
		// 	console.log("scroll refresh")
		// },
		mounted() {
			// 创建BScroll对象
			this.myScroll = new BScroll(this.$refs.wrapper, {
				click: true,
				mouseWheel: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})

			// 监听滚动位置
			this.myScroll.on('scroll', (position) => {
				// console.log(position)
				this.$emit('scrollPosition', position)
			})

			// 监听上拉事件
			this.myScroll.on('pullingUp', () => {
				this.$emit('scrollPullUp')
			})

		},
		methods: {
			// x,y滚动位置，time滚动时间毫秒
			myScrollTo(x, y, time = 500) {
				this.myScroll.scrollTo(x, y, time)
			},
			// 刷新scroll
			myScrollRefresh() {
				this.myScroll.refresh()
			}
		}
	}
</script>

<style>
</style>
