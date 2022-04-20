import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../../components/header'
import './index.scss'

export default function Classify() {
  const state = useLocation()

  return (
    <div className='classify'>
      <Header title={state.state}></Header>
      <div className="classify_body">
        {state.state}
      </div>
    </div>
  )
}
