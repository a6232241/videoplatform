<template>
  <div id='userManage'>
    <div class='form'>
      <main class='field'>
        <p class='title'>影片上傳</p>
        <form class="uploadVideo-form" @submit.prevent="uploadServer">
          <input type="file" name="video" id="fileElem" ref="fileElem" accept="video/*" @change="uploadFiles"/>
          <canvas id="filePreview" ref="filePreview" @dragover.prevent @drop="uploadFiles"></canvas>
          <button id="fileSelect" @click="uploadTrigger">選取檔案</button>
          <div id="fileErr" class="errorMsg">{{ uploadError.msg }}</div>
          <div id="authority">
            <input type="radio" name="authority" v-model="authorityVal" id="public" value="public" checked/>
            <label for="public">公開</label>
            <input type="radio" name="authority" v-model="authorityVal" id="private" value="private" />
            <label for="private">私人</label>
          </div>
          <button>上傳</button>
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
      files: '',
      thumbnail: '',
      uploadError: { error: true, msg: '' },
      authorityVal: 'public'
    }
  },
  methods: {
    uploadTrigger (e) {
      let fileElem = this.$refs.fileElem
      fileApi.uploadTrigger(e, fileElem)
    },
    uploadFiles (e) {
      fileApi.verifyType(e, 'video')
        .then(async (files) => {
          // if (!files.length) {
          //   fileErr.innerHTML = '<p>No files selected!</p>'
          // } else {
          // let preview = document.getElementById('filePreview')
          for (var i = 0; i < files.length; i++) {
            let reader = await fileApi.handleFile(files[i])
            reader.onload = async (e) => {
              let result = e.target.result
              let previewImg = fileApi.createVideoPreview(result)
              previewImg
              .then((val) => {
                return new Promise((resolve, reject) => {
                  let img = new Image()
                  img.src = URL.createObjectURL(val[0].blob)
                  this.thumbnail = new File([val[0].blob], 'thumbnail', { type: val[0].blob.type, lastModified: Date.now() })
                  resolve(img)
                })
                .then((img) => {
                  let canvas = this.$refs.filePreview
                  let context = canvas.getContext('2d')
                  setTimeout(() => {
                    // 以原尺寸取得圖片大小才能避免模糊
                    canvas.width = img.width
                    canvas.height = img.height
                    context.drawImage(img, 0, 0, canvas.width, canvas.height)
                    canvas.style.width = '100%'
                  }, 500)
                })
              })
            }
          }
          this.files = files
          this.uploadError.error = false
          this.uploadError.msg = ''
          // }
        })
        .catch(() => {
          this.uploadError.error = true
          this.uploadError.msg = '未符合請求格式'
        })
    },
    async uploadServer () {
      if (!this.uploadError.error) {
        let formData = new FormData()
        formData.append('username', this.username)
        formData.append('authority', this.authorityVal)
        formData.append('thumbnail', this.thumbnail)
        for (var i = 0; i < this.files.length; i++) {
          formData.append('videos', this.files[i], this.files[i].name)
        }
        await axiosApi.uploadVideo(formData)
        this.uploadError.msg = ''
      } else {
        this.uploadError.msg = '影片未上傳'
      }
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
    #authority {
      & > input {
        margin: 0;
      }
    }
  }
</style>