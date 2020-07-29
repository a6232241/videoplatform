import Vue from 'vue'
import Router from 'vue-router'
// import BilibiliIndex from '@/pages/BilibiliIndex'
// import BilibiliLogin from '@/pages/BilibiliLogin'
// import BilibiliSignup from '@/pages/BilibiliSignup'
import VideoUpload from '@/pages/user/VideoUpload'

Vue.use(Router)

const routes = [
  // {
  //   path: '/user',
  //   name: 'BilibiliIndex',
  //   component: BilibiliIndex,
  //   meta: {
  //     title: '你的空間'
  //   }
  // },
  {
    path: '/user/videoUpload',
    name: 'VideoUpload',
    component: VideoUpload,
    meta: {
      title: '頻道管理'
    }
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
