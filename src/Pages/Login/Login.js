import React from 'react';
import loginIcon from '../../assets/login.svg';
import loginImg from '../../assets/icon.svg';
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import './Login.css';

import {Container, Col, Form, Row, Button} from 'react-bootstrap';

// class Login extends React.Component{
//     state={
//         email:'',
//         pwd:'' 
//     }

//     handleChange = (e) => {
//         const {name,value} = e.target 
//         this.setState({[name]:value})
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//     }
    

//     render(){
//         return(
//             <div>
//             <div>
//                 {/* <Logo/> */}
//             </div>
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="email" name='email' placeholder='email...' required onChange={this.handleChange}/>
//                     <input type="password" name='pwd' placeholder='password...' required onChange={this.handleChange}/>
//                     <button onSubmit={this.handleSubmit}>Log In</button>
//                 </form>
//             </div>
//             </div>
//         )
//     }
// }


const Login = () => {

    return(
        <>
        {/* <Navbar/> */}
        <Container>
            
            <Row>
              <Col></Col>
                <Col className="mt-5 p-3" >
                <img className='icon-img w-100' src={loginImg} alt="icon" />

                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3 p-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Password" />
  </Form.Group>
  {/* <Button type="submit" variant='primary btn-block' className='btnn '>
        Log In
  </Button> */}
  <span><Link to="/" variant='primary btn-block' className="btnn">LogIn</Link></span>
</Form>
                </Col>
               
                <Col></Col>

            </Row>
            </Container>
        </>
        
        
        
    );
};

export default Login;