import cookieUtil from '../utils/cookieUtil'
import menuUtil from '../utils/getMenus'
import {getAuthInfo} from '@/api/api.js'
import routes from '../router/routes.js'

const authId = '1341'

const store = {
  namespaced: true,
  state: {
    token: cookieUtil.getCookie('token'),
    username: '',
    userId: '',
    menus: '',
    components: ''
  },

  getters: {
    menuList: state => menuUtil.getMenuList(routes, state.menus),
  },

  mutations: {
    setToken(state, token) {
      cookieUtil.setCookie('token', token)
      state.token = token
    },
    
    setUsername(state, data) {
      state.username = data
    },

    setUserId(state, data) {
      state.userId = data
    },

    setMenus(state, data) {
      state.menus = data
    },

    setComponents(state, data) {
      state.components = data
    },

    logout(state) {
      cookieUtil.delCookie('token')
      state.token = ''
      state.menus = ''
      state.components = ''
    }
  },

  actions: {
    getAuthInfo({commit, dispatch}) {
      return getAuthInfo(authId).then(res => {
        const data = res.data
        commit('setUsername', data.username)
        commit('setUserId', data.id)
        if (Array.isArray(data.menus)) {
          dispatch('setTypesMap', data.menus)
        } else {
          commit('logout')
          throw new Error('无权限信息, 请尝试重新登录')
        }
      })
    },

    setTypesMap({commit}, arr) {
      if(!Array.isArray(arr) || !arr.length) {
        commit('setMenus', [])
        commit('setComponents', [])
      }else {
        const {menus, components} = handleAuthTree(arr[0])
        commit('setMenus', menus)
        commit('setComponents', components)
      }
    }
  }
}

// 从树中取权限标识
function handleAuthTree(tree) {
  const menus = []
  const components = []

  handleArrayData(tree.children)

  return {
    menus,
    components
  }

  function handleArrayData(arr) {
    if (!arr) return
    arr.forEach(item => {
      if (!!item.frontToolName) {
        if (item.menuType === 0) {
          menus.push(item.frontToolName)
        } else if (item.menuType === 1) {
          components.push(item.frontToolName)
        }
      }
      if (item.children.length > 0) {
        handleArrayData(item.children)
      }
    })
  }
}

export default store