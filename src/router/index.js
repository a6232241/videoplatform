import Vue from 'vue'
import Router from 'vue-router'
import BilibiliIndex from '@/pages/BilibiliIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BilibiliIndex',
      component: BilibiliIndex
    }
  ]
})
