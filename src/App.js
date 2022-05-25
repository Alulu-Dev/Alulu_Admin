// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Router, Route, Switch, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/home/Home";
import Login from "./Pages/Login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import List from "./Pages/list/List";
import Users from "./Pages/userList/UserList";
import Fraud from "./Pages/fraud/Fraud";
import Request from "./Pages/request/Request";
import Matcher from "./Pages/matcher/Matcher";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // const [initialData, setInitialData] = useState([{}])

  // useEffect(()=> {
  //   fetch('http://127.0.0.1:5000/api',{
  //     headers:{
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'}
  //   }).then(
  //     response => response.json()
  //   ).then(data => setInitialData(data))
  // },[]);

  return (
    //  <div className='App'>
    //    <h1>{initialData.title}</h1>
    //  </div>
    // <Router>
    // < Navbar/>
    // <Sidebar/>
    //   <Switch>
    //   <Route path='/'/>
    //   </Switch>
    // </Router>

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>

          <Route path="users" element={<Users />}>
            <Route index element={<List />}></Route>
            <Route path="userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route exact path="/fraud" element={<Fraud />}></Route>
          <Route exact path="/request" element={<Request />}></Route>
          <Route exact path="/matcher" element={<Matcher />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
