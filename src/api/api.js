import {myGet, myPost} from './index.js'

/**
 * 
 * @param {*} params 请求参数
 * @returns 数据 data
 */
// 登录
export const login = params => myPost('/auth/login', params)

// 获取权限
export const getAuthInfo = params => myGet(`/auth/info?id=${params}`)