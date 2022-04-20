import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../../components/header'
import './index.scss'

export default function Return() {
  const state = useLocation()

  return (
    <div className='return'>
      <Header title={state.state}></Header>
      <div className="return_body">
        {state.state}
      </div>
    </div>
  )
}
