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
  const [tag, setTag] = useState("");
  const [allItems, setAllItems] = useState([{}]);
  const [allTags, setAllTags] = useState([{}]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/tags/get/items/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/tags/get/tags/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setAllTags(data));
  }, []);

  const handleSubmit = () => {
    console.log(tag);
    fetch("http://127.0.0.1:5000/api/v2/tags/create/" + tag, {
      method: "pOST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
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
  return (
    <div className="user">
      <div className="usersContainer">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matcher;
