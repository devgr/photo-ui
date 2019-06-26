import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import dataManager from '@/services/data'

Vue.use(Router)
dataManager.init()

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:view',
      name: 'View',
      component: Home
    },
    {
      path: '/',
      name: 'Root',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  const view = to.params.view || 'home'
  dataManager.toView(view)
  next()
})

export default router
