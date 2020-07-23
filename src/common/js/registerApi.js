import axios from 'axios'

const userRequest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'content-type': 'multipart/form-data' }
})

const resSuccess = (res) => {
  alert(res.data)
}
const resError = (err) => {
  alert(err.data)
}

export default {
  async userSignup (data) {
    await userRequest.post('/signup', data)
          .then(resSuccess)
          .catch(resError)
  },
  async userLogin (data) {
    await userRequest.post('/login', data)
          .then(resSuccess)
          .catch(resError)
  },
  async userLogout () {
    await userRequest.get('/logout')
          .then(resSuccess)
          .catch(resError)
  },
  async userIncsession () {
    await userRequest.get('/incsession')
          .then(resSuccess)
          .catch(resError)
  }
}
