<<<<<<< HEAD
import { Table, Space } from "antd";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SearchOutlined } from "@ant-design/icons";
import "./matcher.css";
// import { Input } from 'react-input-component';

const columns_2 = [
  {
    title: "All Tags",
=======
import { Table } from "antd";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SearchOutlined } from "@ant-design/icons";
// import { Input } from 'react-input-component';

const columns = [
  {
    title: "Items",
    key: "name",
    dataIndex: "name",
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <>
          <input
            autoFocus
            placeholder="Type text here"
            type="text"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          />
          <button
            type="primary"
            onClick={() => {
              confirm();
            }}
          >
            Search
          </button>
        </>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.name.toLowerCase().includes(value.toLowerCase());
    },
  },
];

const columns_2 = [
  {
    title: "Tags",
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
    key: "name",
    dataIndex: "name",
    // render: () => <Input />,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      return (
        <input
          autoFocus
          placeholder="Type text here"
          type="text"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
          }}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
        />
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.name.toLowerCase().includes(value.toLowerCase());
    },
  },
];

const data = [];

for (let i = 0; i < 1; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const Matcher = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
<<<<<<< HEAD
  const [selectedTagKeys, setSelectedTagKeys] = useState([]);
=======
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  const [tag, setTag] = useState("");
  const [allItems, setAllItems] = useState([{}]);
  const [allTags, setAllTags] = useState([{}]);

  const onSelectChange = (newSelectedRowKeys) => {
<<<<<<< HEAD
    setSelectedRowKeys(newSelectedRowKeys);
    // console.log("selectedRowKeys changed: ", selectedRowKeys);
  };
  const onSelectTagChange = (newSelectedTagKeys) => {
    setSelectedTagKeys(newSelectedTagKeys);
    // console.log("newSelectedTagKeys changed: ", selectedTagKeys);
=======
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/tags/get/items/", {
      method: "GET",
      headers: {
        Accept: "application/json",
<<<<<<< HEAD
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setAllItems(data.items));
=======
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setAllItems(data));
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/tags/get/tags/", {
      method: "GET",
      headers: {
        Accept: "application/json",
<<<<<<< HEAD
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setAllTags(data.tags));
=======
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setAllTags(data));
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  }, []);

  const handleSubmit = () => {
    console.log(tag);
    fetch("http://127.0.0.1:5000/api/v2/tags/create/" + tag, {
<<<<<<< HEAD
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    }).then((data) => window.location.reload());
  };

  const handleMatch = () => {
    if (selectedTagKeys.length !== 0 && selectedRowKeys.length !== 0) {
      for (var i = 0; i < selectedRowKeys.length; i++) {
        fetch(
          "http://127.0.0.1:5000/api/v2/tags/add-tag/" +
            selectedTagKeys +
            "/" +
            selectedRowKeys[i],
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("Token"),
            },
          }
        );
      }
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500); //change to 1000 works
      });
      promise.then(() => {
        console.log("clicking");
        window.location.reload();
      });
    }
  };

  const handleRemoveTag = (item, tag) => {
    fetch("http://127.0.0.1:5000/api/v2/tags/remove-tag/" + tag + "/" + item, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
    });
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500); //change to 1000 works
    });
    promise.then(() => {
      window.location.reload();
    });
=======
      method: "pOST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
<<<<<<< HEAD
    ],
  };

  const columns = [
    {
      title: "Items",
      key: "name",
      dataIndex: "name",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <>
            <input
              autoFocus
              placeholder="Type text here"
              type="text"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
            <button
              type="primary"
              onClick={() => {
                confirm();
              }}
            >
              Search
            </button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Current Tag",
      key: "tag",
      dataIndex: "tag",
    },
    {
      title: "Action",
      key: "action",
      render: (text) =>
        text.tag === null ? null : (
          <Space size="middle">
            <button
              className="userEdit"
              onClick={() => {
                handleRemoveTag(text.id, text.tag_id);
              }}
              key={text.key + 500}
            >
              Remove Tag
            </button>
          </Space>
        ),
    },
  ];
=======
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
  return (
    <div className="user">
      <div className="usersContainer">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>

<<<<<<< HEAD
          <div className="row col-10 main">
            <div className="userTable col-5 main">
              <Table
                rowSelection={rowSelection}
                columns={columns}
                rowKey={(allItems, index) => allItems.id}
                dataSource={allItems}
              />
            </div>
            <div className="userTable col-5 main">
              <Table
                rowSelection={{
                  type: "radio",
                  selectedRowKeys: selectedTagKeys,
                  onChange: onSelectTagChange,
                }}
                columns={columns_2}
                rowKey={(allTags, index) => allTags.id}
                dataSource={allTags}
              />

              <input
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="enter tag"
              />
              <button className="btn add-tag" onClick={handleSubmit}>
                Add Tag
              </button>
            </div>
            <div className="col-10 main">
              <button
                className="col-5 btn btn-success main"
                onClick={handleMatch}
              >
                Match
              </button>
            </div>
=======
          <div className="userTable col-5 main">
            {/* <Navbar className="nav"/> */}
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={allItems.items}
            />
          </div>
          <div className="userTable col-5 main">
            <Table columns={columns_2} dataSource={allTags.tags} />

            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="enter tag"
            />
            <button onClick={handleSubmit}>Add Tag</button>
>>>>>>> 1717102612d3fb39bf6d542b5293f683d1509d83
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matcher;
