import {GETTOKEN} from '../constant.js'

const initState = ''

export default function tokenReducer(preState= initState, action){
  const {type, data} = action
  switch(type){
    case GETTOKEN: return data
    default: return preState
  }
}