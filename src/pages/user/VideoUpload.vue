<template>
  <div id='userManage'>
    <div class='form'>
      <main class='field'>
        <p class='title'>影片上傳</p>
        <form @submit.prevent>
          <input type="file" id="fileElem" ref="fileElem" accept="video/*" @change="dropImg" />
          <a href="#" id="fileSelect" @click="uploadTrigger">Select some files</a>
          <div id="fileList" ref="fileList">
            <p>No files selected!</p>
          </div>
          <canvas class="dragImg" @dragover.prevent @drop="dropImg"></canvas>
          <button>上傳</button>
        </form>
      </main>
      <!-- <input v-on:input="translateText" v-for='(field, key) in registerForm.schema' :key='key' v-model='registerForm.data[key]'> -->
      <!-- <p v-for='(field, key) in registerForm.data' :key='key'>{{field}}</p> -->
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'VideoUpload',
  // data () {
  //   return {
  //     fileElem: this.$refs.fileElem,
  //     fileList: this.$refs.fileList
  //   }
  // },
  // created () {
  // },
  methods: {
    dropImg (e) {
      e.preventDefault()
      // 拖曳 || 點選
      let data = e.dataTransfer || e.target
      let type = data.files[0].type.split('/')[0]
      // let files = e.dataTransfer.getData('text/html') || e.target.files || e.dataTransfer.files
      return new Promise((resolve, reject) => {
        if (type === 'video') {
          data = data.files
          this.handleFiles(data)
        }
        resolve()
      })
      // .then(() => {
      //   setTimeout(() => { drawImg() }, 100)
      // })
    },
    async uploadTrigger (e) {
      let fileElem = this.$refs.fileElem
      if (fileElem) {
        await fileElem.click()
      }
      e.preventDefault() // prevent navigation to "#"
    },
    handleFiles (files) {
      let fileList = this.$refs.fileList
      if (!files.length) {
        fileList.innerHTML = '<p>No files selected!</p>'
      } else {
        fileList.innerHTML = ''
        var list = document.createElement('ul')
        fileList.appendChild(list)
        for (var i = 0; i < files.length; i++) {
          var li = document.createElement('li')
          list.appendChild(li)
          // 方法2.
          const reader = new FileReader()
          reader.addEventListener('load', (event) => {
            const result = event.target.result
            let src = document.createElement('a')
            src.innerHTML = 'data'
            src.href = result
            li.appendChild(src)
            console.log(src)
          })
          reader.addEventListener('progress', (event) => {
            if (event.loaded && event.total) {
              const percent = (event.loaded / event.total) * 100
              console.log(`Progress: ${Math.round(percent)}`)
            }
          })
          reader.readAsDataURL(files[i])
          // 生成 img 連結
          // let imgSrc = document.createElement('a')
          // imgSrc.innerHTML = img.data
          // imgSrc.href = img.src
          // li.appendChild(imgSrc)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../common/style/field";
  #fileElem {
   display: none; 
  }
  .dragImg {
    border: 1px solid #000;
  }
</style>