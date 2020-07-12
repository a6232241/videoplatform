<template>
  <div id='app'>
    <div class='form'>
      <field
        v-for='(fied, key) in registerForm.schema'
        :key='key'
        :type='field.type'
        v-model='registerForm.data[key]'
      ></field>
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
      registerForm: undefined
    }
  },
  async asyncData () {
    const registerForm = {
      schema: {
        name: { label: '姓名', type: 'text' },
        email: { label: 'Email', type: 'text' },
        password: { label: '密碼', type: 'password' },
        role: {
          label: '角色',
          type: 'select',
          options: {
            selectOptions: [
              { label: '管理者', value: 0 },
              { label: '一般使用者', value: 1 }
            ]
          }
        },
        effectiveAt: { label: '生效日期', type: 'datetime' }
      },
      data: {
        name: undefined,
        email: undefined,
        password: undefined,
        role: 1,
        effectiveAt: undefined
      },
      errorMessages: {}
    }

    return { registerForm }
  }
}
</script>