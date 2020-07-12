<template>
  <main class='field'>
    <p class='title'>註冊</p>
    <form class='register-form' method='post' action='#'>
      <input v-model='fieldValue' type='text' name='name' placeholder='暱稱' required />
      <input v-model='fieldValue' type='password' name='pwd' placeholder='密碼' required />
      <input v-model='fieldValue' type='password' name='re-pwd' placeholder='再次輸入密碼' required />
      <input v-model='fieldValue' type='text' name='M.P' placeholder='電話號碼' required />
      <div>
        <input v-model='fieldValue' type='checkbox' id='contract' required />
        <label for='contract' class='agreement'>
          我已同意
          <a href='#'>用戶使用協議</a>和
          <a href='#'>隱私政策</a>
        </label>
      </div>
      <button>註冊</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'field',
  props: {
    // label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    value: { required: true },
    errorMessages: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      // 由於我們欄位值會變動，所以要把 props 中的 value 賦值到 data 中的屬性
      fieldValue: this.value
    }
  },
  watch: {
    fieldValue () {
      this.inputEmit()
    }
  },
  methods: {
    inputEmit () {
      this.$emit('input', this.fieldValue)
    }
  }
}
</script>

<style lang='scss' scoped>
main {
  padding: 10px 10%;

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
    }
    #contract {
      display: inline-block;
      // position: absolute;
    }
    .agreement {
      display: inline-block;

      a {
        text-decoration: underline;
      }
    }
    button {
      padding: 10px;
      cursor: pointer;
    }
  }
  form > * {
    margin: 15px 0;
  }
}
</style>