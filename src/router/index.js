import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载部分
const Cart = () => import('@/views/cart/Cart')
const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.配置映射关系
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 3.创建router实例
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
