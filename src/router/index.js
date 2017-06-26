import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/layout/Home'
import Main from '@/components/Main'
import OrderList from '@/components/OrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/home',
      component: Home,
      children: [{
        path: '/',
        component: Main
      }, {
        path: '/orderlist',
        component: OrderList
      }]
    }
  ]
})
