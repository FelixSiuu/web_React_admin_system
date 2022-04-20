import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../../components/header'
import './index.scss'

export default function Menu() {
  const state = useLocation()

  return (
    <div className='menu'>
      <Header title={state.state}></Header>
      <div className="menu_body">
        {state.state}
      </div>
    </div>
  )
}
