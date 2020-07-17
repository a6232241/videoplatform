import axios from 'axios'

const userRequest = axios.create({
  baseURL: window.location.origin
})

export const apiUserSignup = data => userRequest.post('/signup', data)
