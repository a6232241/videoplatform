<template>
  <div id='userManage'>
    <div class='form'>
      <main class='field'>
        <p class='title'>影片上傳</p>
        <form class="uploadVideo-form" @submit.prevent>
          <input type="file" name="video" id="fileElem" ref="fileElem" accept="video/*" @change="uploadFiles" />
          <canvas id="filePreview" @dragover.prevent @drop="uploadFiles"></canvas>
          <button id="fileSelect" @click="uploadTrigger">選取檔案</button>
          <div id="fileErr" class="errorMsg" ref="fileErr"></div>
          <button @click="uploadServer">上傳</button>
        </form>
      </main>
      <!-- <input v-on:input="translateText" v-for='(field, key) in registerForm.schema' :key='key' v-model='registerForm.data[key]'> -->
      <!-- <p v-for='(field, key) in registerForm.data' :key='key'>{{field}}</p> -->
    </div>
  </div>
  
</template>

<script>
import fileApi from '@/common/js/fileApi'
import axiosApi from '@/common/js/axiosApi'

export default {
  name: 'VideoUpload',
  props: {
    username: { type: String, default: '訪客' }
  },
  data () {
    return {
      files: ''
    }
  },
  methods: {
    uploadTrigger (e) {
      let fileElem = this.$refs.fileElem
      fileApi.uploadTrigger(e, fileElem)
    },
    uploadFiles (e) {
      let fileErr = this.$refs.fileErr
      fileApi.verifyType(e, 'video')
        .then(async (files) => {
          // if (!files.length) {
          //   fileErr.innerHTML = '<p>No files selected!</p>'
          // } else {
          fileErr.innerHTML = ''
          // let preview = document.getElementById('filePreview')
          for (var i = 0; i < files.length; i++) {
            let reader = await fileApi.handleFile(files[i])
            reader.onload = (e) => {
              let result = e.target.result
              let video = document.createElement('video')
              video.style.width = '100%'
              video.src = result
            }
          }
          this.files = files
          // }
        })
        .catch(() => {
          fileErr.innerHTML = '<p>未符合請求格式</p>'
        })
    },
    async uploadServer () {
      let formData = new FormData()
      formData.append('username', this.username)
      for (var i = 0; i < this.files.length; i++) {
        formData.append('videos', this.files[i], this.files[i].name)
      }
      await axiosApi.uploadVideo(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../common/style/field";
  .uploadVideo-form {

    #fileElem {
     display: none; 
    }
    #filePreview {
      border: 1px solid #000;
    }
    #fileSelect {
      display: inline;
      
    }
  }
</style>