<template>
	<div class="feature">
		<a href="https://act.mogujie.com/zzlx67">
			<img src="~@/assets/img/home/recommend_bg.jpg" @load='featureImgLoad'>
		</a>
	</div>
</template>

<script>
	export default {
		name:'FeatureView',
		methods:{
			featureImgLoad(){
				this.$emit('featureImgCompleted')
			}
		}
	}
</script>

<style lang="less" scoped>
	.feature{

		img{
			width: 100%;
		}
	}
</style>
