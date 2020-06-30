<template>
  <ul class='user-icon login'>
    <li @mouseover="showLogin_signup" @mouseleave="hideLogin_signup">
      <a href='#' class='userControl'>登入</a>
      <HeaderSlide class='login_signup' ref='login_signup'>
        <button slot='btn'>
          註冊
        </button>
        <button slot='btn'>
          登入
        </button>
      </HeaderSlide>
    </li>
    <li>
      <a href='#' class='userControl signup'>註冊</a>
    </li>
  </ul>
</template>

<script>
import HeaderSlide from '@/base/HeaderSlide'
// import axios from 'axios'
// axios.defaults.withCredentials = true
export default {
  name: '',
  data () {
    return {
      loggedIn: false
      // username: '',
      // password: ''
    }
  },
  components: {
    HeaderSlide
  },
  methods: {
    showLogin_signup () {
      this.$refs.login_signup.show()
    },
    hideLogin_signup () {
      this.$refs.login_signup.hide()
    }
  //     login() {
  //       var params = new URLSearchParams()
  //       params.append('username', this.username)
  //       params.append('password', this.password)
  //       axios.post(this.HOST + '/home/system/login', params).then(res => {
  //         if (res.data.code == 1) {
  //           sessionStorage.username = this.username
  //           this.$router.push({ path: '/main' })
  //         } else {
  //           alert('登入失敗')
  //         }
  //       })
  //     },
  //     getNowDate() {
  //       var d = new Date()
  //       return d.getFullYear()
  //     }
  }
}
</script>

<style  lang='scss' scoped>
@import '../common/style/variable'
// .user-icon {
//   display: flex
//   align-items: center
// }
</style>