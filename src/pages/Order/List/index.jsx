import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../../components/header'
import './index.scss'

export default function List() {
  const state = useLocation()

  return (
    <div className='list'>
      <Header title={state.state}></Header>
      <div className="list_body">
        {state.state}
      </div>
    </div>
  )
}
