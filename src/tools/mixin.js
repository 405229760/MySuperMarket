import BackTop from '@/components/content/backtop/BackTop.vue'

export const backTopMixin = {
	data() {
		return {
			isShowBackTop: false
		}
	},
	components: {
		BackTop,
	},
	methods: {
		backTopClick() {
			this.$refs.scroll.myScrollTo(0, 0)
		},
		showBackTop(position) {
			// 是否显示backTop
			this.isShowBackTop = (-position.y) > 1000
		},
	},
}
