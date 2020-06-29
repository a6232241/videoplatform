<template>
  <ul class="user-icon login">
    <li>登入</li>
    <li>
      <a href="#" class="userControl signup">註冊</a>
    </li>
  </ul>
</template>

<script>
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
  }
  //   methods: {
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
  //   }
}
</script>

<style  lang="scss" scoped>
  @import "../common/style/variable";
  // .user-icon {
  //   display: flex;
  //   align-items: center;
  // }
</style>