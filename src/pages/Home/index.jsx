import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
import {getTokenAction} from '../../redux/actions.js'
import Accordion from 'react-bootstrap/Accordion'
import {BsHouse,BsPerson,BsCart4,BsCardList} from "react-icons/bs";
import {ImExit} from "react-icons/im";
import './index.scss'

export default connect(
  state => ({
    token: state.token
  }),
  {
    getTokenAction
  }
)(
  function Home(props) {
    const [sideBar] = useState([
      {title: '首頁', icon: <BsHouse />, children: []},
      {title: '訂單管理', icon: <BsCardList />, children: []},
      {title: '產品管理', icon: <BsCart4 />, children: []},
      {title: '權限管理', icon: <BsPerson />, children: []},
    ])
    const navigate = useNavigate()

    useEffect(()=>{
      if(props.token === ''){
        navigate('/login')
      }
    })
  
    function goLogin(){
      props.getTokenAction('')
    }
  
    return (
      <div className='home'>
        <div className="side_bar">
          <div className='user_name'>
            <div>admin</div>
          </div>
          <div className="item">
          <Accordion>
            {
              sideBar.map((item, index) => {
                return (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>
                      {item.title}
                      <div className="icon">
                        {item.icon}
                      </div>
                    </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      </Accordion.Body>
                  </Accordion.Item>
                )
              })
            }
          </Accordion>
          </div>
        </div>
  
        <header className="logOut" onClick={goLogin}>
          <div className="logOut_box">
            <span>Log Out</span>
            <span><ImExit /></span>
          </div>
        </header>
      </div>
    )
  }
)

