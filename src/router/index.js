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
  },
  //       ]
  //     }
  //   ]
  // }
  {
    path: '/video/:videoId',
    name: 'videoPage',
    component: VideoPage
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { // 如果未匹配到路由
    next('/404')
  } else {
    next() // 如果匹配到正确跳转
  }
})

export default router
