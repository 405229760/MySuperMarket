import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入iconfont
import './assets/iconfont/iconfont.css'

import 'swiper/css/swiper.min.css'

// 给$bus赋值为vue实例
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
