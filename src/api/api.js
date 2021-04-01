import {myGet, myPost} from './index'

export const logon = params => myPost('/auth/login', params)