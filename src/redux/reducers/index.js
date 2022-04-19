// 該文件用於匯總所有的reducers

// 引入redux內部的 combineReducers 來連結多個reducer
import { combineReducers } from 'redux'
//  引入為store對象服務的reducer
import token from './token.js'

// 合併reducer 裡面存著各狀態state
export default combineReducers({
  token
})