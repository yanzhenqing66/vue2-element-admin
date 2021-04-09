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
  if (to.name === 'login') {
    next()
    return
  }
  const token = store.state.auth.token
  if (!token) {
    next({ name: 'login' })
  } else {
    if (!store.state.auth.menus) {
      try {
        await store.dispatch('auth/getAuthInfo')
        next()
      } catch (e) {
        Message.warning(e.message)
        next({ name: 'login' })
      }
    }
  }
})

export default router