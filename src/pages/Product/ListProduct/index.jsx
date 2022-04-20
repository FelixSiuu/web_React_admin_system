import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../../../components/header'
import './index.scss'

export default function ListProduct() {
  const state = useLocation()

  return (
    <div className='listProduct'>
      <Header title={state.state}></Header>
      <div className="listProduct_body">
        {state.state}
      </div>
    </div>
  )
}
