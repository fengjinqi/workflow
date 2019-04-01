
import Mindex from '@/pages/home/index'//首页
import Login from '../components/login/login'//登录
import Search from '@/pages/home/search'//搜索页
import Detail from '@/pages/home/detail'//详情页
import Cart from '@/pages/cart/index'//购物车
import OrderSubmit from '@/pages/cart/orderSubmit'//提交订单
import Order from '@/pages/order/index'//订单中心
import Account from '@/pages/account/index'//账户金额



export default [
      {
        path: '/home',
        name: 'home',
        meta:{
            keepAlive:true
        },
          //component: resolve => require(['@/pages/home/index.vue'],resolve)
        component: () => import('@/pages/home/index'),
      },
      {
          path: '/login',
          name: 'login',
          meta:{
              keepAlive:false
          },
          //component: resolve => require(['@/components/login/login.vue'],resolve)
         component: () => import('@/components/login/login'),
      },
      {
          path: '/search/:id',
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
            path: '/orderSubmit',
            name: 'orderSubmit',
            meta:{
                keepAlive:true
            },
            component: OrderSubmit
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
      },
    {
        path: '*',
        redirect:'/home'
    }
  ]

