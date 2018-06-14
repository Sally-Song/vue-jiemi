import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Categroy from 'components/categroy/categroy'
import Cart from 'components/cart/cart'
import Mine from 'components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/categroy',
      name: 'categroy',
      component: Categroy
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
