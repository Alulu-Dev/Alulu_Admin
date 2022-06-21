import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Table, Tag, Space, columns, Divider } from "antd";
import "./fraud.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Fraud() {
  const [fraudList, setFraudList] = useState([{}]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/request/all/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setFraudList(data));
  }, []);

  console.log(fraudList["Unresolved Requests"]);

  const columns = [
    {
      title: "Receipt",
      dataIndex: "Receipt",
      key: "Receipt",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "User",
      dataIndex: "User",
      key: "User",
    },

    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <>
          {status?.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "Resolved") {
              color = "green";
            }
            if (tag === "Unresolved") {
              color = "red";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: "Action",
      key: "action",
      dataIndex: "Receipt",
      render: (text) => (
        <Space size="middle">
          <Link to={"/request/" + text} className="btn btn-danger">
            Edit
          </Link>
        </Space>
      ),
    },
  ];

  const data = [];

  return (
    <div className="user">
      <div className="usersContainer">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>

          <div className="userTable col-10 main">
            <Navbar className="nav" />
            {fraudList["Unresolved Requests"]?.length >= 1 ? (
              <Table
                columns={columns}
                dataSource={fraudList["Unresolved Requests"]}
                mountNode
              />
            ) : (
              <Table columns={columns} dataSource={data} mountNode />
            )}
            {fraudList["Resolved Requests"]?.length >= 1 ? (
              <Table
                columns={columns}
                dataSource={fraudList["Resolved Requests"]}
                mountNode
              />
            ) : (
              <Table columns={columns} dataSource={data} mountNode />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fraud;
