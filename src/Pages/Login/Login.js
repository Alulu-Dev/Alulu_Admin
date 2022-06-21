import React, { useState } from "react";
import loginIcon from "../../assets/login.svg";
import loginImg from "../../assets/icon.svg";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

import { Container, Col, Form, Row, Button } from "react-bootstrap";
<<<<<<< HEAD
// import { ReorderSharp } from "@material-ui/icons";
=======
import { ReorderSharp } from "@material-ui/icons";
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83

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

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function loginUser() {
    console.log(email, password);
    fetch("http://127.0.0.1:5000/api/v2/session/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((incoming) => incoming.json())
      .then((response) => {
<<<<<<< HEAD
        sessionStorage.setItem("Token", response.access_token);
        // localStorage.setItem("Token", response.access_token);
        navigate("/");
      })
      .catch((err) => alert("wrong login infos"));
=======
        console.log(response);
        sessionStorage.setItem("Token", response.access_token);
        localStorage.setItem("Token", response.access_token);
        navigate("/");
      });
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83

    // result = result.then((res) => {
    //   // console.log(res.headers.entries());
    //   // Cookies.set("access_token", res.headers["x-access-token"]);
    //   // console.log(Cookies.get("access_token"));
    //   // let result2 = fetch("http://127.0.0.1:5000/account/user/", {
    //   //   method: "POST",
    //   //   credentials: "same-origin",
    //   // });
    //   // result2 = result2.then((res) => {
    //   //   console.log(res.json());
    //   // });
    // });
  }
  return (
    <>
      {/* <Navbar/> */}
      <Container>
        <Row>
          <Col></Col>
          <Col className="mt-5 p-3">
            <img className="icon-img w-100" src={loginImg} alt="icon" />

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3 p-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password" />
              </Form.Group>
              <Button
                // type="submit"
                variant="primary btn-block"
                className="btnn "
                onClick={loginUser}
              >
                Log In
              </Button>
              <span>
                {/* <Link to="/" variant="primary btn-block" className="btnn">
                  LogIn
                </Link> */}
              </span>
            </Form>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
