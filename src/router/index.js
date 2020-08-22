import Vue from 'vue'
import Router from 'vue-router'
import BilibiliIndex from '@/pages/BilibiliIndex'
import BilibiliLogin from '@/pages/BilibiliLogin'
import BilibiliSignup from '@/pages/BilibiliSignup'
import VideoUpload from '@/pages/user/VideoUpload'
import VideoPage from '@/pages/VideoPage'

Vue.use(Router)

const routes = [
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
      title: '登錄'
    }
  },
  {
    path: '/signup',
    name: 'BilibiliSignup',
    component: BilibiliSignup,
    meta: {
      title: '註冊'
    }
  },
  {
    path: '/videoUpload',
    name: 'VideoUpload',
    component: VideoUpload,
    meta: {
      title: '影片上傳'
    }
  },
  {
    path: '/video/:aid?',
    name: 'VideoPage',
    component: VideoPage
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
