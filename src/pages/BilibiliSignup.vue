<template>
  <div id='app'>
    <div class='form'>
      <main class='field'>
        <p class='title'>註冊</p>
        <form class='register-form' @submit.prevent="signup">
          <input v-model='usernameVal' type='text' name='username' placeholder='暱稱(最多10個字)' required />
          <p class="invalid-feedback">{{ userError.msg }}</p>
          <input v-model='pwdVal' type='password' name='pwd' placeholder='密碼(至少6位，小於15位，必須包含大小寫和數字)' required />
          <p class="invalid-feedback">{{ pwdError.msg }}</p>
          <input v-model='rePwdVal' type='password' name='rePwd' placeholder='再次輸入密碼' required />
          <p class="invalid-feedback">{{ rePwdError.msg }}</p>
          <input v-model='mobilePhoneVal' type='text' name='mobilePhone' placeholder='電話號碼' required />
          <p class="invalid-feedback">{{ mobilePhoneError.msg }}</p>
          <div class="contractContainer">
            <input v-model='contractVal' type='checkbox' id='contract' required />
            <label for='contract' class='agreement'>
              我已同意
              <a href='#'>用戶使用協議</a> 和
              <a href='#'>隱私政策</a>
            </label>
          </div>
          <button class="registerBtn" disabled>註冊</button>
        </form>
      </main>
      <!-- <input v-on:input="translateText" v-for='(field, key) in registerForm.schema' :key='key' v-model='registerForm.data[key]'> -->
      <!-- <p v-for='(field, key) in registerForm.data' :key='key'>{{field}}</p> -->
    </div>
  </div>
</template>

<script>
import axiosApi from '@/common/js/axiosApi'

const isText = /^[a-zA-Z0-9]+$/
const include = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
const isPhone = /^[0-9]{9,}$/

export default {
  name: 'BilibiliSignup',
  data () {
    return {
      // 由於我們欄位值會變動，所以要把 props 中的 value 賦值到 data 中的屬性
      usernameVal: this.value,
      pwdVal: this.value,
      rePwdVal: this.value,
      mobilePhoneVal: this.value,
      contractVal: false,
      userError: { error: false, msg: '' },
      pwdError: { error: false, msg: '' },
      rePwdError: { error: false, msg: '' },
      mobilePhoneError: { error: false, msg: '' }
    }
  },
  watch: {
    usernameVal () {
      if (!isText.test(this.usernameVal)) {
        this.userError.error = true
        this.userError.msg = '請勿包含特殊字元'
      } else if (this.usernameVal.length > 10) {
        this.userError.error = true
        this.userError.msg = '請勿超過10個字'
      } else {
        this.userError.error = false
        this.userError.msg = ''
        this.$emit('input', this.usernameVal)
      }
    },
    pwdVal () {
      if (!isText.test(this.pwdVal)) {
        this.pwdError.error = true
        this.pwdError.msg = '請勿包含特殊字元'
      } else if (this.pwdVal.length < 6) {
        this.pwdError.error = true
        this.pwdError.msg = '請勿少於6個字'
      } else if (this.pwdVal.length > 15) {
        this.pwdError.error = true
        this.pwdError.msg = '請勿超過15個字'
      } else if (!include.test(this.pwdVal)) {
        this.pwdError.error = true
        this.pwdError.msg = '至少包括一個大小寫字母或數字'
      } else {
        this.pwdError.error = false
        this.pwdError.msg = ''
        this.$emit('input', this.pwdVal)
      }
    },
    rePwdVal () {
      if (this.pwdVal !== this.rePwdVal) {
        this.rePwdError.error = true
        this.rePwdError.msg = '密碼輸入不相等'
      } else {
        this.rePwdError.error = false
        this.rePwdError.msg = ''
        this.$emit('input', this.rePwdVal)
      }
    },
    mobilePhoneVal () {
      if (!isPhone.test(this.mobilePhoneVal)) {
        this.mobilePhoneError.error = true
        this.mobilePhoneError.msg = '請輸入0-9的數字'
      } else {
        this.mobilePhoneError.error = false
        this.mobilePhoneError.msg = ''
        this.$emit('input', this.mobilePhoneVal)
      }
    },
    contractVal () {
      let registerBtn = document.querySelector('.registerBtn')
      registerBtn.disabled = !this.contractVal
    }
  },
  methods: {
    async signup () {
      if (this.userError.error || this.pwdError.error || this.rePwdError.error || this.mobilePhoneError) {
        alert('輸入內容有錯誤')
      } else {
        let form = document.getElementsByClassName('register-form')[0]
        let formData = new FormData(form)
        axiosApi.userSignup(formData)
      }
    }
    // getRequired () {
    //   return this.userError.error && this.pwdError.error && this.rePwdError.error && this.mobilePhoneError.error
    // }
    // isSignup () {
      // let isComplete = true
      // for (let [key, val] of Object.entries(this.$data)) {
      //   if (typeof val === 'object') {
      //     console.clear(key)
      //     isComplete = (Object.values(val)[0] && isComplete)
      //   }
      // }
    // }
  }
}
</script>

<style lang='scss' scoped>
  @import "../common/style/field";
</style>