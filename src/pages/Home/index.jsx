import React,{useEffect} from 'react'
import {useNavigate,NavLink,Outlet} from 'react-router-dom'
import {connect} from 'react-redux'
import {getTokenAction} from '../../redux/actions.js'
import Accordion from 'react-bootstrap/Accordion'
import {BsHouse} from "react-icons/bs";
import sideBar from '../../sideBar.js'
import {ImExit} from "react-icons/im";
import './index.scss'

export default connect(
  state => ({
    token: state.token,
  }),
  {
    getTokenAction
  }
)(
  function Home(props) {
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
        <div className="left">
          <div className="side_bar">
            <div className='user_name'>
              <div>admin</div>
            </div>
            <div className="item">
              <NavLink to='/home/index' className='index_page' state={'首頁'}>
                <div className="icon"><BsHouse /></div>
                首頁
              </NavLink>

              <Accordion alwaysOpen>
                {
                  sideBar.map((item, index) => {
                    return (
                      <Accordion.Item eventKey={index} key={index} >
                        <Accordion.Header>
                          {item.title}
                          <div className="icon">
                            {item.icon}
                          </div>
                        </Accordion.Header>

                        {
                          <Accordion.Body>
                            {
                              item.children.map((child, index) => {
                                return (
                                  <NavLink 
                                  to={child.pathName} 
                                  state={`${item.title} - ${child.title}`} 
                                  className='child' 
                                  key={index}
                                  >
                                    {child.title}
                                  </NavLink>
                                )
                              })
                            }
                          </Accordion.Body> 
                        }
                      </Accordion.Item>
                    )
                  })
                }
              </Accordion>
            </div>
          </div>
        </div>
  
        <div className="right">
          <header className="logOut">
            <div className="logOut_box" onClick={goLogin}>
              <span>Log Out</span>
              <span><ImExit /></span>
            </div>
          </header>

          <div className="content">
            <Outlet/>
          </div>

          <footer className="footer">
            React Bootstrap v2.2.3
          </footer>
        </div>
      </div>
    )
  }
)

