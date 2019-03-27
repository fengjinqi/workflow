import Vue from 'vue'
import Router from 'vue-router'
import Mindex from '@/pages/home/index'//首页
import Search from '@/pages/home/search'//搜索页
import Detail from '@/pages/home/detail'//详情页
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
        component: Mindex,
        redirect: {name: 'index'},//重定向
        children: [
            {
                path: 'index',
                name: 'index',
                component: Mindex
            },
            {
                path: 'detail',
                name: 'detail',
                component: Detail
            },
        ]
      },
      {
          path: '/search',
          name: 'search',
          component: Search
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
