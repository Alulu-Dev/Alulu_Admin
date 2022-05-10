import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Table, Tag, Space, columns } from "antd";
import "./userList.scss";
import Navbar from "../../components/Navbar/Navbar";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Users() {
  const [usersList, setUsersList] = useState([{}]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/account/all-users/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);

  console.log(usersList);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Number of Receipts",
      dataIndex: "numOfReceipts",
      key: "numOfReceipts",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags?.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "Active") {
              color = "green";
            }
            if (tag === "Blocked") {
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
      render: (text, record) => (
        <Space size="middle">
          <button className="userEdit">Edit</button>

          <DeleteOutlined className="userDelete" />
        </Space>
      ),
    },
  ];

  let data = [];

  return (
    <div className="user">
      <div className="usersContainer">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>

          <div className="userTable col-10 main">
            <Navbar className="nav" />
            {usersList.length >= 1 ? (
              <Table columns={columns} dataSource={usersList} mountNode />
            ) : (
              <Table columns={columns} dataSource={data} mountNode />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
