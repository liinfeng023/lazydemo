import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/container/Full'
import HelloWorld from '@/components/HelloWorld'
import Aside from '@/components/Aside'

// 登陆
import login from '@/views/login/login'

Vue.use(Router)

var router = new Router({
  routes:[
    {
      path: '/',
      component: Full,
      children: [
        {
          path: '/',
          component: HelloWorld
        },
        {
          path:'/Aside',
          name:'Aside',
          component:Aside
        }
      ]
    },
    { 
      path: '/login', 
      name:'login',
      component: login
    },
]
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // next()
  if (to.fullPath!=='/login') {
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router

