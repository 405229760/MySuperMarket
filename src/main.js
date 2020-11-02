import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 这里没有指定具体文件会直接去找index.js
import toast from './components/common/toast'

//引入iconfont
import './assets/iconfont/iconfont.css'
//引入swiper
import 'swiper/css/swiper.min.css'

// 给$bus赋值为vue实例
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
// 安装toast，会直接去调用install
Vue.use(toast)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
