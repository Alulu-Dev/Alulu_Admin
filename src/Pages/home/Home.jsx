import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

const Home = () => {
  const [systemSummary, setSystemSummary] = useState([{}]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/summary/system/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setSystemSummary(data));
  }, []);

  const monthlyData = systemSummary["monthly Registry"];

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" incoming_data={systemSummary["Total Users"]} />
          <Widget
            type="fraud"
            incoming_data={systemSummary["Total Fraud Case"]}
          />
          <Widget
            type="request"
            incoming_data={systemSummary["Total Requests"]}
          />
          <Widget
            type="receiptUpload"
            incoming_data={systemSummary["Total Receipts"]}
          />
        </div>
        <Chart
          // data={userData}
          key={monthlyData}
          data={monthlyData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
      </div>
    </div>
  );
};

export default Home;
