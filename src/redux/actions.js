import {GETTOKEN} from './constant.js'

export const getTokenAction = tokenobj => {return {data: tokenobj, type: GETTOKEN}}