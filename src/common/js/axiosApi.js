import axios from 'axios'
import storage from '@/common/js/storageApi'

const userRequest = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
  headers: { 'content-type': 'multipart/form-data' }
})

const resError = (err) => {
  console.log(err.data)
}

export default {
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
  }
}
