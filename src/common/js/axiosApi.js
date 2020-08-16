import axios from 'axios'
import storage from '@/common/js/storageApi'
// import fileApi from '@/common/js/fileApi'

const userRequest = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
  headers: { 'content-type': 'multipart/form-data' }
})

const resError = (err) => {
  console.log(err.data)
}

export default {
  // 使用者API
  async userSignup (data) {
    await userRequest.post('/signup', data)
      .then((res) => {
        alert(res.data)
        window.location.pathname = '/'
      })
      .catch(resError)
  },
  async userLogin (data) {
    await userRequest.post('/login', data)
      .then((res) => {
        let resData = res.data
        if (resData.status) {
          storage.setStorage('guid', resData.guid)
        }
        alert(resData.message)
        window.location.pathname = '/'
      })
      .catch(resError)
  },
  async userLogout () {
    await userRequest.get('/logout')
      .then((res) => {
        storage.removeStorage('guid')
        alert(res.data)
        window.location.pathname = '/'
      })
      .catch(resError)
  },
  async userIncsession () {
    let formData = new FormData()
    formData.append('guid', storage.getStorage('guid'))
    let resData = await userRequest.post('/incsession', formData)
      .then((res) => {
        return res.data
      })
      .catch(resError)
    return resData
  },
  // 頻道API
  async uploadVideo (files) {
    await userRequest.post('/uploadVideo', files)
      .then(async (res) => {
        console.log(res.data)
      })
      .catch(resError)
  },
  // 主頁API
  async getThumbnails () {
    let resData = await userRequest.get('/videoList')
      .then((res) => {
        console.log(`取得縮圖 ${res.data.message}`)
        return res.data.data
      })
      .catch(resError)
    return resData
  },
  // 影片API
  async getVideo (data) {
    let resData = await userRequest.post('/video', data)
      .then((res) => {
        console.log(`取得影片 ${res.data.message}`)
        return res.data.data[0]
      })
      .catch(resError)
    return resData
  }
}
