import axios from 'axios'
import store from '@/store/index.js'
// 引入动画
import {showLoading, hideLoading} from '../utils/loading.js'

const instance = axios.create({
  baseURL: 'http://123.103.86.52/ms-api',
  timeout: 100000,
})

// 请求拦截
instance.interceptors.request.use(config => {
  showLoading()
  const token = store.state.auth.token || ''
  if (token && !config.headers.token) {
    config.headers.token = token
  }
  return config
}, err => {
  hideLoading()
  return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(response => {
  hideLoading()
  return response
}, error => {
  hideLoading()
  console.log(error)
  // const errRes = error.response
  // VueRouter.push('/login')
  // throw new Error(errRes.data.message)
})

const myGet = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(res => {
      if (res.data.code === 1000000) {
        resolve(res.data)
      }else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

const myPost = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then(res => {
      if (res.data.code === 1000000) {
        resolve(res.data)
      }else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export { myGet, myPost }