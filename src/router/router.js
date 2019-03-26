import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'//首页
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
        component: Index
      },
      {
          path: '/order',
          name: 'order',
          component: Order
      },
      {
          path: '/account',
          name: 'account',
          component: Account
      }
  ]
})
