import React from "react";
import "./widget.scss";
import {
  UserOutlined,
  MoneyCollectOutlined,
  PullRequestOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Widget = ({ type, incoming_data }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: incoming_data,
        isMoney: false,
        link: "See all users",
        to: "/users",
        icon: <UserOutlined className="icon" />,
      };
      break;
    case "fraud":
      data = {
        title: "FRAUD",
        amount: incoming_data,
        isMoney: false,
        to: "/",
        icon: <MoneyCollectOutlined className="icon" />,
      };
      break;
    case "request":
      data = {
        title: "REQUEST",
        amount: incoming_data,
        isMoney: false,
        link: "See all requests",
        to: "/fraud",
        icon: <PullRequestOutlined className="icon" />,
      };
      break;
    case "receiptUpload":
      data = {
        title: "RECEIPTS",
        amount: incoming_data,
        isMoney: false,
        to: "/",
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
        <span className="link">
          <Link className="more-link" to={data.to}>
            {data.link}{" "}
          </Link>
        </span>
      </div>
      <div className="right">
        <div className="percentage negative"></div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
