module.exports = {
	plugins: {
		autoprefixer: {},
		"postcss-px-to-viewport": {
			//视窗的宽度和高度，对应设计稿的宽度和高度
			viewportWidth: 375,
			viewportHeight: 812,

			//指定'px'转换为视窗单位值的小数位数
			unitPrecision: 5,

			//指定需要转换成的视窗单位，建议用vw
			viewportUnit: 'vw',

			//指定不需要转换的类
			selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],
			// 指定不需要转换的文件,注意这里需要用正则表达式
			exclude: [/TabBar/,], // 表示包含TabBar的文件

			// 小于或等于'1px'不转换为视窗单位
			minPixelValue: 1,

			// 允许在媒体查询中转换'px'
			mediaQuery: false,
		},
	}
}
