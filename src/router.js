import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeDemo from './components/pages/home/Demo'
import HomeDemo1 from './components/pages/home/Demo1'
import HomeDemo2 from './components/pages/home/Demo2'
import HomeDemo3 from './components/pages/home/Demo3'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: HomeDemo
    },
    {
      path: '/home/demo1',
      component: HomeDemo1
    },
    {
      path: '/home/demo2',
      component: HomeDemo2
    },
    {
      path: '/home/demo3',
      component: HomeDemo3
    }
  ]
})

export default router
