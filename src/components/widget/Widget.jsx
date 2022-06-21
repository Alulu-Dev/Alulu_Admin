import React from "react";
import "./widget.scss";
import {
<<<<<<< HEAD
=======
  UpOutlined,
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  UserOutlined,
  MoneyCollectOutlined,
  PullRequestOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const Widget = ({ type, incoming_data }) => {
=======

const Widget = ({ type, incoming_data }) => {
  //Tempo
 
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: incoming_data,
        isMoney: false,
<<<<<<< HEAD
        link: "See all users",
        to: "/users",
=======
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
        icon: <UserOutlined className="icon" />,
      };
      break;
    case "fraud":
      data = {
        title: "FRAUD",
        amount: incoming_data,
        isMoney: false,
<<<<<<< HEAD
        to: "/",
=======
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
        icon: <MoneyCollectOutlined className="icon" />,
      };
      break;
    case "request":
      data = {
        title: "REQUEST",
        amount: incoming_data,
        isMoney: false,
<<<<<<< HEAD
        link: "See all requests",
        to: "/fraud",
=======
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
        icon: <PullRequestOutlined className="icon" />,
      };
      break;
    case "receiptUpload":
      data = {
        title: "RECEIPTS",
        amount: incoming_data,
        isMoney: false,
<<<<<<< HEAD
        to: "/",
=======
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
        icon: <ReconciliationOutlined className="icon" />,
      };

      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.amount}</span>
<<<<<<< HEAD
        <span className="link">
          <Link className="more-link" to={data.to}>
            {data.link}{" "}
          </Link>
        </span>
      </div>
      <div className="right">
        <div className="percentage negative"></div>
=======
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          
         
        </div>
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
