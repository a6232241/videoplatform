import Vue from 'vue'
import Router from 'vue-router'
import BilibiliIndex from '@/pages/BilibiliIndex'
import BilibiliLogin from '@/pages/BilibiliLogin'
import BilibiliSignup from '@/pages/BilibiliSignup'

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
    component: BilibiliLogin,
    meta: {
      title: 'bilibiliLogin'
    }
  },
  {
    path: '/signup',
    name: 'BilibiliSignup',
    component: BilibiliSignup,
    meta: {
      title: 'bilibiliSignup'
    }
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
