import Login from '../pages/Login'
import Home from '../pages/Home'
import Index from '../pages/Index'
import List from '../pages/Order/List'
import ListProduct from '../pages/Product/Classify'
import Classify from '../pages/Product/Classify'
import Return from '../pages/Order/Return'
import User from '../pages/Permission/User'
import Menu from '../pages/Permission/Menu'
import {Navigate} from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      { path: 'index', element: <Index/> },
      { path: '/home/order/list', element: <List/> },
      { path: '/home/order/return', element: <Return/> },
      { path: '/home/order/management', element: <ListProduct/> },
      { path: '/home/product/list', element: <List/> },
      { path: '/home/product/classify', element: <Classify/> },
      { path: '/home/permission/user', element: <User/> },
      { path: '/home/permission/menu', element: <Menu/> },
    ]
  },
]

export default routes