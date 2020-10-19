<template>
	<div id='tabbar'>
		<slot></slot>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	#tabbar {
		display: flex;
		// background-color: gray;
		height: 50px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		/* 
			参数1:水平阴影的位置
			参数2:垂直阴影的位置
			参数3:blur可选,只能取正,模糊半径，0即无模糊效果，值越大阴影边缘越模糊
			参数4:spread可选,取值正负都可,阴影的周长向四周扩展的尺寸,正值阴影扩大,负值阴影缩小
			参数5:color可选
			参数6:外部投影outset(默认);内部投影inset,阴影在背景之上内容之下
		*/ 
		box-shadow: 0 -1px 1px rgba(100,100,100,.2);
	}
</style>
