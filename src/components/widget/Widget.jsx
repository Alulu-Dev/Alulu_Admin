import React from "react";
import "./widget.scss";
import {
  UpOutlined,
  UserOutlined,
  MoneyCollectOutlined,
  PullRequestOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";

const Widget = ({ type, incoming_data }) => {
  //Tempo
 
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: incoming_data,
        isMoney: false,
        icon: <UserOutlined className="icon" />,
      };
      break;
    case "fraud":
      data = {
        title: "FRAUD",
        amount: incoming_data,
        isMoney: false,
        icon: <MoneyCollectOutlined className="icon" />,
      };
      break;
    case "request":
      data = {
        title: "REQUEST",
        amount: incoming_data,
        isMoney: false,
        icon: <PullRequestOutlined className="icon" />,
      };
      break;
    case "receiptUpload":
      data = {
        title: "RECEIPTS",
        amount: incoming_data,
        isMoney: false,
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
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          
         
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
