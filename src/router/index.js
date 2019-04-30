import Vue from 'vue'
import Router from 'vue-router'

//整体 
import Full from '@/container/Full'

// 首页
import Home from '@/components/home'

// main
import Dialog from '@/views/main/others/dialog'
import DialogForm from '@/views/main/others/dialog-form'

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
          component: Home
        },
        {
          path:'/Home',
          name:'Home',
          component:Home
        },
        {
          path:'/Dialog',
          name:'Dialog',
          component:Dialog
        },
        {
          path:'/DialogForm',
          name:'DialogForm',
          component:DialogForm
        },
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

