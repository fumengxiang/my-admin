import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

export default instance
