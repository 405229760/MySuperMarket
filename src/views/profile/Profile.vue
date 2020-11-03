<template>
	<div id="profile">
		<nav-bar class="profile-nav">
			<div slot='center'>我 的 档 案</div>
		</nav-bar>
		<div class="profile-top">
			<div class="profile-top-left">
				<img src="~@/assets/img/profile/avatar.svg">
			</div>
			<div class="profile-top-center">
				<div class="profile-top-center-box">
					<p>登录/注册</p>
					<span class="iconfont icon-phone"></span>
					<span>暂无绑定手机号</span>
				</div>
			</div>
			<div class="profile-top-right">
				<span class="iconfont icon-tubiaozhizuo-"></span>
			</div>
		</div>
		<div class="profile-info">
			<div class="profile-info-box">
				<span class="info-num">0.00</span>
				<span class="info-text">元</span>
				<div class="info-title">我的余额</div>
			</div>
			<div class="profile-info-box">
				<span class="info-num">0</span>
				<span class="info-text">个</span>
				<div class="info-title">我的优惠</div>
			</div>
			<div class="profile-info-box">
				<span class="info-num">0</span>
				<span class="info-text">分</span>
				<div class="info-title">我的积分</div>
			</div>
		</div>
		<div class="tab-shadow" />
		<div class="profile-tab">
			<div class="tab-box">
				<img src="~@/assets/img/profile/message.svg">
				<span>我的消息</span>
			</div>
			<div class="tab-box">
				<img src="~@/assets/img/profile/pointer.svg">
				<span>积分商城</span>
			</div>
			<div class="tab-box">
				<img src="~@/assets/img/profile/vip.svg">
				<span>会员卡</span>
			</div>
			<div class="tab-shadow" />
			<div class="tab-box">
				<img src="~@/assets/img/profile/cart.svg">
				<span>我的购物</span>
			</div>
			<div class="tab-box">
				<img src="~@/assets/img/profile/shopping.svg">
				<span>下载购物</span>
			</div>
		</div>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'

	export default {
		name: 'Profile',
		components: {
			NavBar,

		}
	}
</script>

<style lang="less" scoped>
	#profile {
		.tab-shadow {
			height: 15px;
			background-color: #E0E0E0;
		}

		.profile-nav {
			background-color: var(--color-tint);
			color: white;
			font-weight: bold;
		}

		.profile-top {
			background-color: pink;
			display: flex;

			.profile-top-left {
				width: 120px;
				height: 100px;
				padding: 10px;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.profile-top-center {
				flex: 1;
				color: white;
				display: flex;

				.profile-top-center-box {
					align-self: center;

					p {
						font-size: 24px;
						margin-bottom: 8px;
					}
				}


			}

			.profile-top-right {
				color: white;
				text-align: center;
				width: 40px;
				line-height: 100px;
				font-size: 20px;
				font-weight: bold;
			}
		}

		.profile-info {
			display: flex;
			height: 100px;
			background-color: white;

			.profile-info-box {

				flex: 1;
				text-align: center;
				align-self: center;

				.info-num {
					font-size: 24px;
					font-weight: bold;
					color: darkorange;
					margin-right: 2px;
				}

				.info-text {}

				.info-title {
					margin-top: 10px;
				}
			}
		}

		.profile-tab {
			.tab-box {
				height: 50px;
				box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
				display: flex;

				img {
					margin: 0 10px;
					height: 25px;
					align-self: center;
				}

				span {
					margin-top: 18px;
				}
			}
		}
	}
</style>
