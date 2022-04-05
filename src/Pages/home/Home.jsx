import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./home.scss"
import Navbar from "../../components/Navbar/Navbar"
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummyData'; 

const Home = () => {
    return (
        
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                 <Navbar/> 
                 <div className="widgets">
                     <Widget type="user"/>
                     <Widget type="fraud"/>
                     <Widget type="request"/>
                     <Widget type="receiptUpload"/>
                 </div>
                 <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            </div>
        </div>
    )
}

export default Home