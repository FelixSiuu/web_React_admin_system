import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../../components/header'
import './index.scss'

export default function Management() {
  const state = useLocation()

  return (
    <div className='management'>
      <Header title={state.state}></Header>
      <div className="management_body">
        {state.state}
      </div>
    </div>
  )
}
