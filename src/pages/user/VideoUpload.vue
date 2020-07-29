<template>
  <div id='userManage'>
    <div class='form'>
      <main class='field'>
        <p class='title'>影片上傳</p>
        <form @submit.prevent>
          <input type="file" accept="video/*" />
          <button>上傳</button>
        </form>
      </main>
      <!-- <input v-on:input="translateText" v-for='(field, key) in registerForm.schema' :key='key' v-model='registerForm.data[key]'> -->
      <!-- <p v-for='(field, key) in registerForm.data' :key='key'>{{field}}</p> -->
    </div>
  </div>
  
</template>

<script>
// export default {
//   data() {
//     return {
//     }
//   }
// }
</script>

<style lang="scss" scoped>
  @import "../../common/style/field";
</style>