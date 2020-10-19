import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入iconfont
import './assets/iconfont/iconfont.css'

import 'swiper/css/swiper.min.css'


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
