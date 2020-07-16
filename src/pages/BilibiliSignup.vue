<template>
  <div id='app'>
    <div class='form'>
      <field></field>
      <!-- <input v-on:input="translateText" v-for='(field, key) in registerForm.schema' :key='key' v-model='registerForm.data[key]'> -->
      <!-- <p v-for='(field, key) in registerForm.data' :key='key'>{{field}}</p> -->
    </div>
  </div>
</template>

<script>
import BilibiliHeader from '@/components/BilibiliHeader'
import BilibiliFooter from '@/components/BilibiliFooter'
import Field from '@/components/Field'

export default {
  name: '',
  components: {
    BilibiliHeader,
    BilibiliFooter,
    Field
  },
  data () {
    return {
      registerForm: {
        schema: {
          name: { name: 'name' },
          password: { name: 'pwd' },
          repassword: { name: 're-pwd' },
          phone: { name: 'M.P' }
        },
        data: {
          name: undefined,
          password: undefined,
          repassword: undefined,
          phone: undefined
        }
      }
    }
  }
  // methods: {
  //   translateText: function (text) {
  //     alert(text)
  //   }
  // }
}
</script>