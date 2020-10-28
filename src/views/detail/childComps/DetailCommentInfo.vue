<template>
	<div class="goods-comment" v-if="goodsComment.commentNum > 0">
		<div class="goods-comment-title">
			<div>用户评价</div>
			<div @click='moreCommentClick'>更多</div>
		</div>
		<div class="goods-comment-userinfo">
			<img :src="goodsComment.userIcon">
			<span>{{goodsComment.userName}}</span>
		</div>
		<div class="goods-comment-text">
			{{goodsComment.content}}
		</div>
		<div class="goods-comment-other">
			<span class="goods-comment-other-date">{{goodsComment.commentDate | showDate}}</span>
			<span>{{goodsComment.style}}</span>
		</div>
	</div>
</template>

<script>
	import {
		formatDate
	} from '@/tools/jsTools.js'

	export default {
		name: "DetailCommentInfo",
		props: {
			goodsComment: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {
			moreCommentClick() {
				console.log("点击加载更多评论")
			}
		},
		filters: {
			showDate(value) {
				// 1.将时间戳转成date对象
				const date = new Date(value * 1000)
				// 2.将date进行格式化
				return formatDate(date, 'yyyy/MM/dd hh:mm')
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods-comment {
		margin-top: 20px;
		padding: 0 10px 20px 10px;
		box-shadow: 0 5px 1px rgba(100, 100, 100, .2);

		.goods-comment-title {
			padding: 10px 15px 20px 10px;
			display: flex;
			justify-content: space-between;
			box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
			margin-bottom: 10px;
			font-weight: bold;
		}

		.goods-comment-userinfo {
			height: 60px;
			margin-bottom: 10px;
			vertical-align: middle;

			img {
				width: 60px;
				height: 60px;
				float: left;
				margin-right: 12px;
				border-radius: 50%;
			}

			span {
				display: block;
				line-height: 60px;
				float: left;
				font-size: 20px;
			}
		}

		.goods-comment-text {
			margin: 0 10px;
			clear: both;
			font-size: 16px;
			line-height: 26px;
		}

		.goods-comment-other {
			margin: 10px;
			margin-top: 10px;
			font-size: 14px;
			color: gray;

			.goods-comment-other-date {
				margin-right: 10px;
			}
		}
	}
</style>
