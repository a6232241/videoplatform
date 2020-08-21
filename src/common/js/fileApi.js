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
  async getFileData (file) {
    const reader = new FileReader()
    reader.addEventListener('progress', async (event) => {
      if (event.loaded && event.total) {
        const percent = (event.loaded / event.total) * 100
        console.log(`Progress: ${Math.round(percent)}`)
      }
    })
    // 將 result 結果以 data:*/*;/base64 載入
    reader.readAsDataURL(file)
    return reader
  },
  // 生成影片blob縮圖(video data)，回傳dataImage
  async createVideoThumbnail (data) {
    let videoElem = document.createElement('video')
    videoElem.preload = 'metadata'
    videoElem.muted = true
    videoElem.volume = 0
    videoElem.currentTime = 1
    // 如果為 data 則不變，如果為 blob 則轉為 data
    videoElem.src = typeof data === 'string' || data instanceof String ? data : URL.createObjectURL(data)
    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    let blankData = canvas.toDataURL()
    return new Promise((resolve, reject) => {
      videoElem.onloadeddata = () => {
        canvas.width = videoElem.videoWidth
        canvas.height = videoElem.videoHeight
        context.drawImage(videoElem, 0, 0, canvas.width, canvas.height)
      }
      setTimeout(() => {
        canvas.toBlob((blob) => {
          if (blankData !== canvas.toDataURL()) {
            resolve(blob)
          } else {
            reject()
          }
        })
      }, 500)
    })
  }
}
