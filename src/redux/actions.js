import {GETTOKEN} from './constant.js'
import {GETUSERLIST} from './constant.js'

// token
export const getTokenAction = tokenobj => {return {data: tokenobj, type: GETTOKEN}}

// user list
export const getUserListAction = userObj => {return {data: userObj, type: GETUSERLIST}}