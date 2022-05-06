import { Table } from "antd";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SearchOutlined } from "@ant-design/icons";
// import { Input } from 'react-input-component';

const columns = [
  {
    title: "Receipts",
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
  const [tag, setTag] = useState('')
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSubmit = () => {
    console.log(tag)
  }

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
              dataSource={data}
            />
          </div>
          <div className="userTable col-5 main">
            <Table columns={columns_2} dataSource={data} />

            <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="enter tag"/> 
            <button onClick={handleSubmit}>Add Tag</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Matcher;
