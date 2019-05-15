import Search from '@/pages/home/search'//搜索页
import Searchs from '@/pages/home/searchs'//搜索页
import Detail from '@/pages/home/detail'//详情页
import Cart from '@/pages/cart/index'//购物车
import OrderSubmit from '@/pages/cart/orderSubmit'//提交订单
import Order from '@/pages/order/index'//订单中心
import OrderDetail from '@/pages/order/detail'//订单详情页
import Account from '@/pages/account/index'//账户金额
import parent from '@/pages/order/parent'//账户金额




export default [
      {
        path: '/home',
        name: 'home',
        meta:{
            keepAlive:true
        },
          //component: resolve => require(['@/pages/home/addrs.vue'],resolve)
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
        path: '/searchs',
        name: 'searchs',
        meta:{
            keepAlive:true
        },
        component: Searchs,

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
        path: '/searchs/details/:id',
        name: 'searchs_detail',
        meta:{
            keepAlive:true
        },
        component: () => import('@/pages/home/details'),
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
            path: '/orderSubmit/:id',
            name: 'orderSubmit',
            meta:{
                keepAlive:true
            },
            component: OrderSubmit
       },
    {
        path: '/orderSubmits/:id',
        name: 'orderSubmits',
        meta:{
            keepAlive:true
        },
        component: () => import('@/pages/cart/orderSubmits.vue'),
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
        path: '/parent',
        name: 'parent',
        meta:{
            keepAlive:true
        },
        component:parent,
    },
    {
        path: '/orderdetail/:id',
        name: 'orderdetail',
        meta:{
            keepAlive:true
        },
        component: OrderDetail
    },
    {
        path: '/orderdetails/:id',
        name: 'orderdetails',
        meta:{
            keepAlive:true
        },
        component: () => import('@/pages/order/detailjishou'),
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
        path: '/Persona/addrs',
        name: 'Persona_addrs',
        meta:{
            keepAlive:true
        },
        //component: resolve => require(['@/components/login/login.vue'],resolve)
        component: () => import('@/views/Persona/addrs'),
    },
    {
        path: '/Persona/Hospital',
        name: 'Persona_Hospital',
        meta:{
            keepAlive:true
        },
        component: () => import('@/views/Persona/Hospital'),
    },
    {
        path: '/Persona/add_Hospital',
        name: 'add_Hospital',
        meta:{
            keepAlive:true
        },
        component: () => import('@/views/Persona/add_Hospital'),
    },
    {
        path: '/Persona/password',
        name: 'password',
        meta:{
            keepAlive:true
        },
        component: () => import('@/views/Persona/password'),
    },
    {
        path: '/Persona/menu',
        name: 'menu',
        meta:{
            keepAlive:true
        },
        component: () => import('@/views/Persona/menu'),
    },
    {
        path: '*',
        redirect:'/home'
    }
  ]

