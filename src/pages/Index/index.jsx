import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../components/header'
import './index.scss'

export default function Index() {
  const state = useLocation()

  return (
    <div className='index'>
      <Header title={state.state}></Header>
      <div className="index_body">
        {state.state}
      </div>
    </div>
  )
}
