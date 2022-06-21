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
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<PrivateRoute />}></Route> */}

          <Route exact path="/" element={<Home />}></Route>

          <Route path="login" element={<Login />}></Route>

          <Route path="users" element={<Users />}>
            <Route index element={<List />}></Route>
            <Route path="userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route exact path="/fraud" element={<Fraud />}></Route>

          <Route exact path="/request/:id" element={<Request />}></Route>
          <Route exact path="/matcher" element={<Matcher />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
