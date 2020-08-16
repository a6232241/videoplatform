import { Video } from 'video-metadata-thumbnails'

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
  // 將檔案轉為 blob 類型
  async handleFile (file) {
    const reader = new FileReader()
    reader.addEventListener('progress', async (event) => {
      if (event.loaded && event.total) {
        const percent = (event.loaded / event.total) * 100
        await console.log(`Progress: ${Math.round(percent)}`)
      }
    })
    await reader.readAsDataURL(file)
    return reader
  },
  // 生成影片blob縮圖(video blob) 回傳 array，ex. file[0].blob
  async createVideoPreview (blob, options = { quality: 1, interval: 6 }) {
    const video = new Video(blob)
    let thumbnails = await video.getThumbnails(options)
    return thumbnails
  }
}
