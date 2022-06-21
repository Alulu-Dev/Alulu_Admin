<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Table, Tag, Space, Menu, Dropdown } from "antd";
import "./userList.scss";
import Navbar from "../../components/Navbar/Navbar";
import "antd/dist/antd.css";

function Users() {
  const [usersList, setUsersList] = useState([{}]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/account/all-users/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);
  const handleActive = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/modify/status/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({
        user: id,
        status: "activate",
        reason: "string",
      }),
    }).then((data) => window.location.reload());
  };
  const handleBlock = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/modify/status/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({
        user: id,
        status: "block",
        reason: "string",
      }),
    }).then((data) => window.location.reload());
  };
  const handleDelete = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/modify/status/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({
        user: id,
        status: "delete",
        reason: "string",
      }),
    }).then((data) => window.location.reload());
  };

  const handleUpgrade = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/upgrade/user/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    }).then((data) => window.location.reload());
  };
  const handleDowngrade = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/downgrade/user/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    }).then((data) => window.location.reload());
  };

  console.log(usersList);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
      render: (text) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  onClick={() => {
                    handleActive(text.id);
                  }}
                  key={text.key + 100}
                >
                  Activate
                </Menu.Item>
                <Menu.Item
                  onClick={(id) => {
                    handleBlock(text.id);
                  }}
                  key={text.key + 200}
                >
                  Block
                </Menu.Item>
                <Menu.Item
                  onClick={(id) => {
                    handleDelete(text.id);
                  }}
                  key={text.key + 300}
                >
                  Delete
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <a
              className="ant-dropdown-link"
              key={text.key + 400}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Edit Status
            </a>
          </Dropdown>
          <button
            className="userEdit"
            onClick={() => {
              handleUpgrade(text.id);
            }}
            key={text.key + 500}
          >
            Upgrade to Admin
          </button>
          <button
            className="userEdit"
            onClick={() => {
              handleDowngrade(text.id);
            }}
            key={text.key + 600}
          >
            Downgrade to Customer
          </button>
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
=======
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
<<<<<<< HEAD
import { Table, Tag, Space, Menu, Dropdown } from "antd";
import "./userList.scss";
import Navbar from "../../components/Navbar/Navbar";
import "antd/dist/antd.css";
=======
import { Table, Tag, Space, columns } from "antd";
import "./userList.scss";
import Navbar from "../../components/Navbar/Navbar";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83

function Users() {
  const [usersList, setUsersList] = useState([{}]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/account/all-users/", {
      method: "GET",
      headers: {
        Accept: "application/json",
<<<<<<< HEAD
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);
  const handleActive = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/modify/status/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({
        user: id,
        status: "activate",
        reason: "string",
      }),
    }).then((data) => window.location.reload());
  };
  const handleBlock = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/modify/status/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({
        user: id,
        status: "block",
        reason: "string",
      }),
    }).then((data) => window.location.reload());
  };
  const handleDelete = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/modify/status/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({
        user: id,
        status: "delete",
        reason: "string",
      }),
    }).then((data) => window.location.reload());
  };

  const handleUpgrade = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/upgrade/user/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    }).then((data) => window.location.reload());
  };
  const handleDowngrade = (id) => {
    fetch("http://127.0.0.1:5000/api/v2/account/downgrade/user/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    }).then((data) => window.location.reload());
  };

  console.log(usersList);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
      render: (text) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  onClick={() => {
                    handleActive(text.id);
                  }}
                  key={text.key + 100}
                >
                  Activate
                </Menu.Item>
                <Menu.Item
                  onClick={(id) => {
                    handleBlock(text.id);
                  }}
                  key={text.key + 200}
                >
                  Block
                </Menu.Item>
                <Menu.Item
                  onClick={(id) => {
                    handleDelete(text.id);
                  }}
                  key={text.key + 300}
                >
                  Delete
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <a
              className="ant-dropdown-link"
              key={text.key + 400}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Edit Status
            </a>
          </Dropdown>
          <button
            className="userEdit"
            onClick={() => {
              handleUpgrade(text.id);
            }}
            key={text.key + 500}
          >
            Upgrade to Admin
          </button>
          <button
            className="userEdit"
            onClick={() => {
              handleDowngrade(text.id);
            }}
            key={text.key + 600}
          >
            Downgrade to Customer
          </button>
=======
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
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
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
>>>>>>> a4e30c69416dfbd4ffba73aeb416bc9aea026526
