import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/layout/Home'
import Main from '@/components/Main'
import OrderList from '@/components/pages/OrderList'
import Table1 from '@/components/pages/Table1'
import OrderForm from '@/components/pages/OrderForm'

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
      }, {
        path: '/table1',
        component: Table1
      }, {
        path: '/orderform',
        component: OrderForm
      }]
    }
  ]
})
