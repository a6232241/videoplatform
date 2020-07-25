import axios from 'axios'

const userRequest = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
  headers: { 'content-type': 'multipart/form-data' }
})

const resSuccess = (res) => {
  return res.data
}
const resError = (err) => {
  console.log(err.data)
}

export default {
  async userSignup (data) {
    await userRequest.post('/signup', data)
          .then(resSuccess)
          .catch(resError)
  },
  async userLogin (data) {
    await userRequest.post('/login', data)
          .then((res) => {
            alert(res.data)
            window.location.pathname = '/'
          })
          .catch(resError)
  },
  async userLogout () {
    await userRequest.get('/logout')
          .then((res) => {
            alert(res.data)
            window.location.pathname = '/'
          })
          .catch(resError)
  },
  async userIncsession () {
    let data = await userRequest.get('/incsession')
                    .then(resSuccess)
                    .catch(resError)
    return data
  }
}
