<template>
  <main class='field'>
    <p class='title'>註冊</p>
    <form class='register-form' method='post' action='http://localhost:3000/signup'>
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
        <!-- <p class="invalid-feedback">{{ contractError.msg }}</p> -->
      </div>
      <button class="signupBtn" @click="signup" disabled>註冊</button>
    </form>
  </main>
</template>

<script>
import register from '@/common/js/registerApi'

// const isText = /^[a-zA-Z0-9]+$/
// const include = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
// const isPhone = /^[0-9]{9,}$/
export default {
  name: 'field',
  data () {
    return {
      // 由於我們欄位值會變動，所以要把 props 中的 value 賦值到 data 中的屬性
      usernameVal: this.value,
      pwdVal: this.value,
      rePwdVal: this.value,
      mobilePhoneVal: this.value,
      contractVal: this.value,
      userError: { error: false, msg: '' },
      pwdError: { error: false, msg: '' },
      rePwdError: { error: false, msg: '' },
      mobilePhoneError: { error: false, msg: '' }
    }
  },
  watch: {
    usernameVal () {
      // if (!isText.test(this.usernameVal)) {
      //   this.userError.error = true
      //   this.userError.msg = '請勿包含特殊字元'
      // } else if (this.usernameVal.length > 10) {
      //   this.userError.error = true
      //   this.userError.msg = '請勿超過10個字'
      // } else {
      this.userError.error = false
      this.userError.msg = ''
      this.$emit('input', this.usernameVal)
      // }
    },
    pwdVal () {
      // if (!isText.test(this.pwdVal)) {
      //   this.pwdError.error = true
      //   this.pwdError.msg = '請勿包含特殊字元'
      // } else if (this.pwdVal.length < 6) {
      //   this.pwdError.error = true
      //   this.pwdError.msg = '請勿少於6個字'
      // } else if (this.pwdVal.length > 15) {
      //   this.pwdError.error = true
      //   this.pwdError.msg = '請勿超過15個字'
      // } else if (!include.test(this.pwdVal)) {
      //   this.pwdError.error = true
      //   this.pwdError.msg = '至少包括一個大小寫字母或數字'
      // } else {
      this.pwdError.error = false
      this.pwdError.msg = ''
      this.$emit('input', this.pwdVal)
      // }
    },
    rePwdVal () {
      // if (this.pwdVal !== this.rePwdVal) {
      //   this.rePwdError.error = true
      //   this.rePwdError.msg = '密碼輸入不相等'
      // } else {
      this.rePwdError.error = false
      this.rePwdError.msg = ''
      this.$emit('input', this.rePwdVal)
      // }
    },
    mobilePhoneVal () {
      // if (!isPhone.test(this.mobilePhoneVal)) {
      //   this.mobilePhoneError.error = true
      //   this.mobilePhoneError.msg = '請輸入0-9的數字'
      // } else {
      this.mobilePhoneError.error = false
      this.mobilePhoneError.msg = ''
      this.$emit('input', this.mobilePhoneVal)
      // }
    },
    contractVal () {
      let signupBtn = document.getElementsByClassName('signupBtn')[0]
      signupBtn.disabled = !this.contractVal
    }
  },
  methods: {
    async signup () {
      let form = document.getElementsByClassName('.register-form')[0]
      let formData = new FormData(form)

      const resSuccess = (res) => {
        console.log(res)
        alert('註冊成功')
      }
      const resError = (err) => {
        console.error(err)
      }
      register.userSignup(formData)
        .then(resSuccess)
        .catch(resError)
    }
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
main {
  padding: 10px 10%;
  margin: 20px 0;
  box-sizing: border-box;

  .title {
    font-size: 38px;
    text-align: center;
  }
  form {
    display: flex;
    flex-flow: column wrap;
    padding: 0 20%;

    input {
      padding: 10px;
      margin-top: 25px;
    }
    .contractContainer {
      padding: 10px 10px 10px 0;

      #contract {
        display: inline-block;
        margin-top: 10px;
      }
      .agreement {
        display: inline-block;

        a {
          text-decoration: underline;
        }
      }
    }
    .signupBtn {
      padding: 10px;
      margin-top: 15px;
      cursor: pointer;
    }
    .invalid-feedback {
      font-size: 13px;
      padding: 0 12px;
      margin-top: 5px;
      color: #ff2222;
    }

  }
}
</style>