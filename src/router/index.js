import Vue from 'vue'
import Router from 'vue-router'
import BilibiliIndex from '@/pages/BilibiliIndex'
import BilibiliLogin from '@/pages/BilibiliLogin'
import BilibiliSignup from '@/pages/BilibiliSignup'
import VideoUpload from '@/pages/user/VideoUpload'

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
  },
  // {
  // path: '/user',
  // // name: 'user',
  // // component: User,
  // children: [
  //   {
  //     path: '',
  //     // name: 'user',
  //     // component: UserManage,
  //     meta: {
  //       title: '你的空間'
  //     },
  //     children: [
  //       {
  //         path: '',
  //         name: 'user'
  //         // component: UserInformation
  //       }
  //     ]
  //   },
  //   {
  //     path: 'videoManage',
  //     // name: 'videoManage',
  //     // component: VideoManage,
  //     meta: {
  //       title: '你的頻道'
  //     },
  //     children: [
  {
    path: '/videoUpload',
    name: 'videoUpload',
    component: VideoUpload
  }
  //       ]
  //     }
  //   ]
  // }
]

export default new Router({
  mode: 'history',
  routes: routes
})
