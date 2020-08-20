// import { Video } from 'video-metadata-thumbnails'

export default {
  // 檔案上傳觸發(接收檔案 Elem, input[file] Elem)
  async uploadTrigger (e, fileElem) {
    if (fileElem) {
      await fileElem.click()
    }
    e.preventDefault()
  },
  // 檔案類型驗證(接收檔案 Elem, 預設檔案類型)
  verifyType (e, type) {
    e.preventDefault()
    // 拖曳 || 點選
    let data = e.dataTransfer || e.target
    let dataType = data.files[0].type.split('/')[0]
    return new Promise((resolve, reject) => {
      if (dataType === type) {
        data = data.files
        resolve(data)
      } else {
        reject()
      }
    })
  },
  // 將檔案 blob 轉為 data:*/*;/base64 類型
  async handleFile (file) {
    const reader = new FileReader()
    reader.addEventListener('progress', async (event) => {
      if (event.loaded && event.total) {
        const percent = (event.loaded / event.total) * 100
        await console.log(`Progress: ${Math.round(percent)}`)
      }
    })
    // 將 result 結果以 data/base64 載入
    await reader.readAsDataURL(file)
    return reader
  },
  // 生成影片blob縮圖(video blob) 回傳 array，ex. file[0].blob
  async createThumbnail (blob, options = { quality: 1, interval: 6 }) {
    let videoElem = document.createElement('video')
    videoElem.preload = 'metadata'
    videoElem.muted = true
    videoElem.volume = 0
    videoElem.currentTime = 1
    videoElem.src = typeof blob === 'string' || blob instanceof String ? blob : URL.createObjectURL(blob)
    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    videoElem.onloadeddata = () => {
      canvas.width = videoElem.videoWidth
      canvas.height = videoElem.videoHeight
      document.body.appendChild(canvas)
      context.drawImage(videoElem, 0, 0, canvas.width, canvas.height)
    }
    // const video = new Video(blob)
    // let thumbnails = await video.getThumbnails(options)
  }
}
