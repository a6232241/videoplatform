<template>
<div id="app">
    <main>
      <p class='title'>註冊</p>
      <form class="register-form" method="post" action="#">
        <input type="text" placeholder="暱稱" required>
        <input type="password" placeholder="密碼" required>
        <input type="re-password" placeholder="再次輸入密碼" required>
        <input type="text" placeholder="電話號碼" required>
        <div>
          <input type="checkbox" id="contract" required>
          <label for="contract" class="agreement">我已同意<a href="#">用戶使用協議</a>和<a href="#">隱私政策</a></label>
        </div>
        <button>註冊</button>
      </form>
    </main>
</div>    
</template>

<script>
  import BilibiliHeader from '@/components/BilibiliHeader'
  import BilibiliFooter from '@/components/BilibiliFooter'
  // import login from '@/common/js/login'

  export default {
    name: '',
    components: {
      BilibiliHeader,
      BilibiliFooter
    }
  }
</script>

<style lang="scss" scoped>
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
      margin: 15px 0;
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
  }
}
</style>