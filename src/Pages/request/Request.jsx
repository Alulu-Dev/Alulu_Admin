import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "antd/dist/antd.css";
import "./request.scss";

import {
  Form,
  Input,
  Button,
  Checkbox,
  DatePicker,
  Space,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from "antd";

const Request = () => {
  try {
    localStorage.getItem("Token");
  } catch (e) {
    console.log(12);
  }
  const receipt_id = "62916bf0fc050ec99123c028";
  const [form] = Form.useForm();
  const [itemAPIData, setItemData] = useState([{}]);
  const [receiptAPIData, setReceiptData] = useState([{}]);
  const [receiptImage, setReceiptImage] = useState({});
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/receipt/get_data/" + receipt_id + "/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReceiptData(data);
        setItemData(data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      "http://127.0.0.1:5000/api/v2/receipt/get_image/" + receipt_id + "/",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("Token"),
        },
      }
    )
      .then((res) => res.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setReceiptImage(imageObjectURL);
      })
      .catch((err) => console.log(err));
  }, []);

  const isEditing = (record) => record.key === editingKey;

  const receiptData = [];
  const itemData = [];

  try {
    for (let i = 0; i < 1; i++) {
      receiptData.push({
        key: i.toString(),
        Company_Name: `ew ${i}`,
        tin_number: receiptAPIData["tin number"],
        fs_number: receiptAPIData["fs number"],
        issued_date: receiptAPIData["issued date"],
        company_name: receiptAPIData["business place name"],
        register_number: receiptAPIData["register id"],
      });
    }
    itemAPIData.forEach((element, i) => {
      itemData.push({
        key: i.toString(),
        item_name: element.name,
        quantity: element.quantity,
        item_price: element.price,
        total_price: element.quantity * element.price,
      });
    });
  } catch (e) {
    console.log("Error");
  }

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const edit = (record) => {
    form.setFieldsValue({
      item_name: "",
      quantity: "",
      item_price: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...itemData];
      console.log(newData);
      const index = newData.findIndex((item) => key === item.key);
      console.log(index);
      // if (index > -1) {
      //   const item = newData[index];
      //   newData.splice(index, 1, { ...item, ...row });
      //   setItemData(newData);
      //   setEditingKey("");
      // } else {
      newData.push(row);
      setItemData(newData);
      setEditingKey("");
      // }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const receipts_column = [
    {
      title: "Tin Number",
      dataIndex: "tin_number",
      width: "15%",
      editable: true,
    },
    {
      title: "FS Number",
      dataIndex: "fs_number",
      width: "10%",
      editable: true,
    },
    {
      title: "Issued Date",
      dataIndex: "issued_date",
      width: "10%",
      editable: true,
    },
    {
      title: "Company Name",
      dataIndex: "company_name",
      width: "10%",
      editable: true,
    },
    {
      title: "Register Number",
      dataIndex: "register_number",
      width: "10%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: "5%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            {/* <Typography.Link
				onClick={() => save(record.key)}
				style={{
					marginRight: 2,
				}}
				>
				Save
				</Typography.Link> */}
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const items_column = [
    {
      title: "Item Name",
      dataIndex: "item_name",
      width: "15%",
      editable: true,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: "10%",
      editable: true,
    },
    {
      title: "Item Price",
      dataIndex: "item_price",
      width: "10%",
      editable: true,
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      width: "10%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: "5%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            {/* <Typography.Link
				onClick={() => save(record.key)}
				style={{
					marginRight: 2,
				}}
				>
				Save
				</Typography.Link> */}
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedReceiptsColumn = receipts_column.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "quantity" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const mergedItemsColumn = items_column.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "quantity" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="">
      <div className="container_all">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>

          <div className="row col-10 main">
            <Navbar className="nav col-10" />
            <div className="col-5">
              <img
                src={receiptImage}
                alt="No Data"
                className="col-12 receipt_image"
              />
            </div>
            <div className="col-6">
              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={receiptData}
                  columns={mergedReceiptsColumn}
                  rowClassName="editable-row"
                  pagination={{
                    onChange: cancel,
                  }}
                />
              </Form>

              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={itemData}
                  columns={mergedItemsColumn}
                  rowClassName="editable-row"
                  pagination={{
                    onChange: cancel,
                  }}
                />
              </Form>
            </div>
            <Button className="ml-auto col-5" onClick={save}>
              Update Receipt Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
