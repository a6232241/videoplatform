import axios from 'axios'

const userRequest = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  async userSignup (data) {
    await userRequest.post('/signup', data)
  }
}
