import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'

Vue.use(Vuex)

const store = {
  state: {

  },
  
  mutations: {

  },

  actions: {

  },

  modules: {
    auth
  }
}

const vueStore = new Vuex.Store(store)

export default vueStore