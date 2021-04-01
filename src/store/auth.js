import util from '../utils/util'

const store = {
  state: {
    token: util.getCookie('token'),
    num: '123'
  }
}

export default store