<template>
  <div id='app'>
    <div class='form'>
      <field v-for="(field, key) in registerForm.schema" :key="key"
          :name="field.name"
          v-model="registerForm.data[key]">
      </field>
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
}
</script>