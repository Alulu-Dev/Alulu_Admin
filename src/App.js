// import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter, Router,Route, Switch, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Home from "./Pages/home/Home"
import Login from './Pages/Login/Login'
import Single from './Pages/single/Single'
import New from './Pages/new/New'
import List from './Pages/list/List'
import UserList from './Pages/userList/UserList';


import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
    // <Router>
    // < Navbar/>
    // <Sidebar/>
    //   <Switch>
    //   <Route path='/'/>
    //   </Switch>
    // </Router>
    
    
    <div className='App'>
      
      <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="users" element={<UserList/>}
        >
          <Route index element={<List/>}></Route>
          <Route path='userId' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
        </Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
