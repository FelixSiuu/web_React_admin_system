import Login from '../pages/Login'
import Home from '../pages/Home'
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
    element: <Home />
  },
]

export default routes