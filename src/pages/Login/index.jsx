import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {getTokenAction} from '../../redux/actions.js'
import {BsPerson, BsFileLock,BsExclamationDiamond} from "react-icons/bs";
import './index.scss'

export default connect(
  state => ({
    token: state.token
  }),{
    getTokenAction
  }
)(
  function Login(props) {
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [isErr, setIsErr] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
      if(props.token === 'adminfelixsiuhello') {
        setTimeout(()=>{
          navigate('/home')
        },1000)
      }
    })

    // user name
    function getUser(e){
      setUser(e.target.value.trim())
    }

    // password
    function getPwd(e){
      setPwd(e.target.value.trim())
    }

    // check username and password
    function checkLogin(e){
      e.preventDefault()
      if(user === 'admin' && pwd === 'admin'){
        // login success
        props.getTokenAction('adminfelixsiuhello')
        setIsErr(false)
        setSuccess(true)
        // go to home page
        setTimeout(()=>{
          navigate('/home')
        },1000)
      }else{
        props.getTokenAction('')
        setIsErr(true)
        setSuccess(false)
      }
    }

    // if error , change class name
    function getClassName(){
      if(isErr === true){
        return 'form-control err'
      }else{
        return 'form-control'
      }
    }
    
    function errTips(){
      if(isErr){
        return (
          <div className='errTips' style={{color: 'red'}}>invalid username or password</div>
        )
      }else return null
    }
  
    return (
      <div className='login'>
        <div className="alert" style={ user === '' || pwd === '' 
        ? {top: '3.125rem'} 
        : {top: '-6.125rem'}
        }>
          <BsExclamationDiamond />
          &nbsp; please input username and password
        </div>

        <div className="login_box">
          <header className="login_head" >
            後台管理系統
          </header>

          <div className="login_body">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <span><BsPerson /></span>
              <Form.Control type="text" placeholder="username : admin" className={getClassName()} onChange={(e)=>{getUser(e)}} />
              {errTips()}
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPas sword">
              <span><BsFileLock /></span>
              <Form.Control type="password" placeholder="password : admin" className={getClassName()} onChange={(e)=>{getPwd(e)}} />
              {errTips()}
            </Form.Group>
            <Button variant={isSuccess ? "success" : "primary"} type="submit" onClick={(e)=>{checkLogin(e)}} >
              {isSuccess ? "Success" : "Log in" }
            </Button>
          </Form>
          </div>
        </div>
      </div>
    )
  }
)

