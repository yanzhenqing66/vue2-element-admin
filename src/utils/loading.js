import {Loading} from 'element-ui'

let loading
function startLoading() {
  loading = Loading.service({
    lock: true
  })
}

function endLoading() {
  loading.close()
}

let httpNum = 0
function showLoading() {
  if(httpNum === 0) {
    startLoading()
  }
  httpNum++
}

function hideLoading() {
  if(httpNum <= 0) return
  httpNum--
  if(httpNum === 0) {
    endLoading()
  }
}

export {showLoading, hideLoading}
