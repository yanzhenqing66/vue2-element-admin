import axios from 'axios'
import VueRouter from 'vue-router'
// import store from '@/store/index.js'

const instance = axios.create({
  baseURL: 'http://123.103.86.52/ms-api',
  timeout: 100000,
})

// 请求拦截
instance.interceptors.request.use(config => {
  console.log(this.$store)
  const token = this.$store.state.auth.token || ''
  console.log(token)
  if(token && !config.noToken) {
    config.headers.token = token
  }
  return config
}, err => {
  Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(response => {
  return response
}, error => {
  const errRes = error.response
  VueRouter.push('/login')
  throw new Error(errRes.data.message)
})

const myGet = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {params}).then(res => {
      if(res.code === 1000000) {
        resolve(res.data)
      }
    })
  }).catch(err => {
    reject(err.data)
  })
}

const myPost = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then(res => {
      if(res.code === 1000000) {
        resolve(res.data)
      }
    })
  }).catch(err => {
    reject(err.data)
  })
}

export {myGet, myPost}