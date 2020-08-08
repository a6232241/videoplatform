
export default {
  // 檔案上傳觸發
  async uploadTrigger (e, fileElem) {
    if (fileElem) {
      await fileElem.click()
    }
    e.preventDefault()
  },
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
  }
}
