import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../store/index.js'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = store.state.auth.token
  if (to.name === 'login') {
    next()
    return
  } 
  if (!token) {
    next('/login')
    Message.warning('没有权限，请重新登录！')
  }else {
    if(!store.state.auth.username) {
      await store.dispatch('auth/getAuthInfo')
      next()
    }else {
      next()
    }
  }
})

export default router