import React,{useState} from 'react'
import {connect} from 'react-redux'
import {useLocation} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Header from '../../../components/header'
import {getUserListAction} from '../../../redux/actions.js'
import './index.scss'

export default connect(
  state => ({
    userList: state.userList
  }),
  {
    getUserListAction
  }
)(
  function User(props) {
    const state = useLocation()
    // modal show or not
    const [show, setShow] = useState(false)
    
    // search
    const [value, setValue] = useState('')

    // user info
    const [username, setUser] = useState('')
    const [password, setPwd] = useState('')
    const [realname, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [active, setActive] = useState(1)
  
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const getValue = (e) => setValue(e.target.value.trim())

    const saveDataForm = (dataType) => {
      if(dataType === 'username'){
        return (e) => {
          setUser(e.target.value.trim());
        }
      }else if(dataType === 'password'){
        return (e) => {
          setPwd(e.target.value.trim())
        }
      }else if(dataType === 'realname'){
        return (e) => {
          setName(e.target.value.trim())
        }
      }else if(dataType === 'phone'){
        return (e) => {
          setPhone(e.target.value.trim())
        }
      }else if(dataType === 'email'){
        return (e) => {
          setEmail(e.target.value.trim())
        }
      }else if(dataType === 'address'){
        return (e) => {
          setAddress(e.target.value.trim())
        }
      }
    }

    const handleSubmit = () => {
      const result = computedClassName()
      if(result === 'err form-control'){
        alert('?????????????????????????????????')
      }else{
        if(props.userList.length < 5){
          props.getUserListAction(
            [...props.userList, {
              username,
              password,
              realname,
              phone,
              email,
              address,
              permission: false,
              id: Math.floor( Math.random() * 99),
            }]
          )
        }else{
          alert('????????????????????????5')
        }
        setUser('')
        setPwd('')
        handleClose()
      }
    }

    const computedClassName = () => {
      if(username === '' || password === ''){
        return 'err form-control'
      }else{
        return 'form-control'
      }
    }

    const deleteUser = (e) => {
      let currentId = e.currentTarget.getAttribute('class').split(' ')[1] * 1;
      const newArr = props.userList.filter(item => item.id !== currentId)
      props.getUserListAction(newArr)  
    }
    
    const currentActive = (e) => {
      setActive(e.target.innerText * 1)
    }

    // Pagination
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item 
        key={number} 
        active={number === active} 
        onClick={e=>{currentActive(e)}}
        >
          {number}
        </Pagination.Item>,
      );
    }
    const paginationBasic = (
      <div>
        <Pagination>{items}</Pagination>
      </div>
    );

    return (
      <div className='user'>
        <Header title={state.state}></Header>
        <div className="user_body">
          <div className='find'>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> ????????? : </ Form.Label>
                    <Form.Control type="text" onChange={(e)=>{getValue(e)}} placeholder='??????????????????'/>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={7}>
                <Button onClick={()=>{console.log(value);}}>??????</Button>
              </Col>
            </Row>
          </div>
  
          <div className='create'>
            <Button onClick={handleShow}>????????????</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>????????????</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3 err">
                    <Form.Label> ????????? : </ Form.Label>
                    <Form.Control 
                    className={computedClassName()} 
                    type="text" 
                    onChange={saveDataForm('username')} 
                    placeholder='??????????????????' 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> ?????? : </ Form.Label>
                    <Form.Control 
                    className={computedClassName()} 
                    type="password" 
                    onChange={saveDataForm('password')} 
                    placeholder='???????????????'/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> ?????? : </ Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={saveDataForm('realname')} 
                    placeholder='???????????????' />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> ?????? : </ Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={saveDataForm('phone')} 
                    placeholder='???????????????' />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label> e-mail : </ Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={saveDataForm('email')} 
                    placeholder='?????????????????????' />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label> ?????? : </ Form.Label>
                    <Form.Control 
                    type="text" 
                    onChange={saveDataForm('address')} 
                    placeholder='???????????????' />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
  
          <div className='user_list'>
            <Table striped hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>?????????</th>
                  <th>??????</th>
                  <th>????????????</th>
                  <th>??????</th>
                  <th>??????</th>
                  <th>??????</th>
                </tr>
              </thead>
              <tbody>
              {
                props.userList.map((item,index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.realname}</td>
                      <td>{item.phone}</td>
                      <td>{item.permission ? '?????????' : '????????????'}</td>
                      <td>{item.email}</td>
                      <td>
                        <span 
                          className={`delete ${item.id}`}
                          onClick={(e)=>{deleteUser(e)}}
                        >
                          {item.id === 1? '' : '??????'}</span>
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </Table>
          </div>
              
          {paginationBasic}

        </div>
      </div>
    )
  }
)

