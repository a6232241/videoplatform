import axios from 'axios'

const userRequest = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  async userSignup (data) {
    await userRequest.post('/signup', data)
  },
  async userLogin (data) {
    await userRequest.post('/login', data)
  },
  async userLogout (data) {
    await userRequest.post('/logout', data)
  }
}
