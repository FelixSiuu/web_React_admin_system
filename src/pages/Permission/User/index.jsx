import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../../components/header'
import './index.scss'

export default function User() {
  const state = useLocation()

  return (
    <div className='user'>
      <Header title={state.state}></Header>
      <div className="user_body">
        {state.state}
      </div>
    </div>
  )
}
