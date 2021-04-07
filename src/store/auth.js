import util from '../utils/cookieUtil'

const store = {
  namespaced: true,
  state: {
    token: util.getCookie('token'),
  },
  
  mutations: {
    setToken(state, token) {
      util.setCookie('token', token)
      state.token = token
    }
  }
}

export default store