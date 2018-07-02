import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/demo/Test'

Vue.use(Router)
const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: {
        title: '首页'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {   //如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
})

export default router
