<template>
	<div class="img-info">
		<div class="img-info-title">
			<span class="title-cub"></span>
			<span class="title-line"></span>
			<p class="title-text">{{showImgKey}}</p>
			<div class="right-line" style="float:right">
				<span class="title-line"></span>
				<span class="title-cub"></span>
			</div>
		</div>
		<div class="imglist">
			<img v-for="img in showImgList" :src="img" @load='imgLoad'>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailShowImgInfo",
		data() {
			return {
				loadCount: 0,
			}
		},
		props: {
			showImgKey: String,
			showImgList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			imgLoad() {
				if (++this.loadCount == this.showImgList.length)
					this.$emit('detailShowImgCompleted')
			}
		}
	}
</script>

<style lang="less" scoped>
	.img-info {
		.img-info-title {
			margin: 20px 10px;

			.title-cub {
				display: inline-block;
				width: 8px;
				height: 8px;
				background-color: black;
			}

			.title-line {
				display: inline-block;
				width: 150px;
				border-bottom: 1px solid black;
			}

			.title-text {
				margin: 15px 0 10px 30px;
				font-weight: bold;
			}
		}

		.imglist {
			clear: both;
			margin-top: 50px;

			// background-color: red;
			img {
				max-width: 100%;
			}
		}
	}
</style>
