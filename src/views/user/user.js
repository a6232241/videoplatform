import Vue from 'vue'
import App from './user'
import VueLazyload from 'vue-lazyload'
import router from '../../router/user'
import './common/style/init.scss'

Vue.config.productionTip = false

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: require('@/assets/img_loading.png'),
//   loading: require('@/assets/img_loading.png'),
//   attempt: 1
// })

/* eslint-disable no-new */
new Vue({
  el: '#user',
  router,
  render: h => h(App)
})
