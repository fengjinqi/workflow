import Vue from 'vue'
import Router from 'vue-router'
import Mindex from '@/pages/home/index'//首页
import Login from '../components/login/login'//登录
import Search from '@/pages/home/search'//搜索页
import Detail from '@/pages/home/detail'//详情页
import Cart from '@/pages/cart/index'//购物车
import Order from '@/pages/order/index'//订单中心
import Account from '@/pages/account/index'//账户金额

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'index',
        meta:{
            keepAlive:true
        },
        component: Mindex,
      },
      {
          path: '/login',
          name: 'login',
          meta:{
              keepAlive:false
          },
          component: Login,
      },
      {
          path: '/search',
          name: 'search',
          meta:{
              keepAlive:true
          },
          component: Search,

      },
      {
          path: '/search/detail/:id',
          name: 'detail',
          meta:{
              keepAlive:true
          },
          component: Detail
      },
      {
          path: '/cart',
          name: 'cart',
          meta:{
              keepAlive:true
          },
          component: Cart
      },
      {
          path: '/order',
          name: 'order',
          meta:{
              keepAlive:true
          },
          component: Order
      },
      {
          path: '/account',
          name: 'account',
          meta:{
              keepAlive:true
          },
          component: Account
      }
  ]
})
