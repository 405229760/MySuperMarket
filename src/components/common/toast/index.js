import Toast from './Toast.vue'
const obj = {}

obj.install = function(Vue) {
	// 1.创建组件构造器
	const toastConstructor = Vue.extend(Toast)
	// 2.创建出一个组件对象
	const toast = new toastConstructor()
	/* 
	 3.将组件对象手动挂载到某一个元素上，
	   这里会创建一个div(也可以换成其他标签)进行挂载
	   之后会用Toast.vue里的模板替换该div
	*/
	toast.$mount(document.createElement('div'))
	// 4.toast.$el对应的就是div
	document.body.appendChild(toast.$el)

	// 5.给vue实例增加属性
	Vue.prototype.$toast = toast
}

export default obj
