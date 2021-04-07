import {myGet, myPost} from './index.js'

export const login = params => myPost('/auth/login', params)