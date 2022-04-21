import {GETUSERLIST} from '../constant.js'

const initState = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    realname: 'Felix',
    phone: 88888888,
    permission: true,
    email: 'xxxx@gmail.com',
    address: 'xxxx@gmail.com'
  }
]

export default function userListReducer(preState= initState, action){
  const {data, type} = action
  switch(type){
    case GETUSERLIST : return [...data]
    default : return preState
  }
}