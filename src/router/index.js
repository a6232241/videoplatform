import Vue from 'vue'
import Router from 'vue-router'
import BilibiliIndex from '@/pages/BilibiliIndex'
import BilibiliLogin from '@/pages/BilibiliLogin'

Vue.use(Router)

const routes = [
  {
    path: '*',
    name: 'BilibiliIndex',
    component: BilibiliIndex
  },
  {
    path: '/',
    name: 'BilibiliIndex',
    component: BilibiliIndex
  },
  {
    path: '/login',
    name: 'BilibiliLogin',
    component: BilibiliLogin
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
