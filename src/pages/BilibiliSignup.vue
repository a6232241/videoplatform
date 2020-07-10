<template>
<div id="app">
    <main>
      <p class='title'>註冊</p>
      <form method="post">
        <input type="text" placeholder="暱稱">
        <input type="password" placeholder="密碼">
        <input type="text" placeholder="電話號碼">
        <div>
          <input type="checkbox" id="contract">
          <label for="contract" class="agreement">我已同意<a href="#">用戶使用協議</a>和<a href="#">隱私政策</a></label>
        </div>
          <input type="button" value="註冊">
      </form>
    </main>
</div>    
</template>

<script>
  import BilibiliHeader from '@/components/BilibiliHeader'
  import BilibiliFooter from '@/components/BilibiliFooter'

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