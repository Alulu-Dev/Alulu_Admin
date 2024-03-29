import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "antd/dist/antd.css";
import "./request.scss";

import {
  Form,
  Input,
  Button,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from "antd";

function logTry() {
  const x = sessionStorage.getItem("Token");
  if (x) {
    console.log("active");
    return;
  } else {
    console.log(12);
    return <Navigate to="/login" />;
  }
}

function UpdateItemData(item_id, item) {
  fetch("http://127.0.0.1:5000/api/v2/request/update_item/" + item_id + "/", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("Token"),
    },
    body: JSON.stringify({
      name: item.item_name,
      quantity: item.quantity,
      item_price: item.item_price,
    }),
  })
    .then((res) => res.json())
    .then((_) => {
      window.location.reload();
    })
    .catch((err) => alert(err));
}

function UpdateReceiptData(receipt_id, receipt) {
  fetch(
    "http://127.0.0.1:5000/api/v2/request/update_update/" + receipt_id + "/",
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
      },
      body: JSON.stringify({
        tin_number: receipt.tin_number,
        fs_number: receipt.fs_number,
        issued_date: receipt.issued_date,
        business_place_name: receipt.company_name,
        register_id: receipt.register_number,
      }),
    }
  )
    .then((res) => res.json())
    .then(() => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
}
const Request = () => {
  const { id } = useParams();

  const receipt_id = id;
  const [form] = Form.useForm();
  const [formReceipt] = Form.useForm();
  const [itemAPIData, setItemData] = useState([{}]);
  const [receiptAPIData, setReceiptData] = useState([{}]);
  const [receiptImage, setReceiptImage] = useState({});
  const [editingKey, setEditingKey] = useState("");
  const [editedId, setEditID] = useState("");
  const [isItemEdit, setIsItemEdit] = useState(false);
  const [isReceiptEdit, setIsReceiptEdit] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v2/receipt/get_data/" + receipt_id + "/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("Token"),
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
          Authorization: "Bearer " + sessionStorage.getItem("Token"),
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
  const isEditingItems = (record) => record.key === editingKey;

  const receiptData = [];
  const itemData = [];

  try {
    for (let i = 0; i < 1; i++) {
      receiptData.push({
        key: receipt_id,
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
        id: element.id,
        item_name: element.name,
        quantity: element.quantity,
        item_price: element.price,
        total_price: element.quantity * element.price,
      });
    });
  } catch (e) {
    console.log("Error");
  }
  const { TextArea } = Input;
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
    const inputNode =
      inputType === "number" ? <InputNumber /> : <TextArea width={"400px"} />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
              width: "200px",
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
              // {
              //   // function(rule, value, callback, source, options)

              //   validator: (rule:any, valuestring,  (string) => void, value ) => {
              //     value.length < 3 ? cb("too short") : cb()
              //   };
              // },

              // (value) => {
              //   if (title === "Quantity" && value < 1) {
              //     return {
              //       required: true,
              //       message: "please input valid number",
              //     };
              //   }
              // },
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

  const editReceipt = (_record) => {
    setIsReceiptEdit(!isReceiptEdit);
    formReceipt.setFieldsValue({
      company_name: "",
      fs_number: "",
      issued_date: "",
      register_number: "",
      tin_number: "",
      ..._record,
    });
    setEditingKey(_record.key);
  };

  const edit = (record, id) => {
    setEditID(id);
    setIsItemEdit(!isItemEdit);
    form.setFieldsValue({
      item_name: "",
      quantity: "",
      item_price: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancelReceipt = () => {
    setEditingKey("");
    setIsReceiptEdit(!isReceiptEdit);
  };

  const cancel = () => {
    setEditingKey("");
    setIsItemEdit(!isItemEdit);
  };

  const saveReceipt = async (key) => {
    try {
      const row = await form.validateFields();
      UpdateReceiptData(receipt_id, row);
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const saveItem = async (key) => {
    try {
      const row = await form.validateFields();
      UpdateItemData(editedId, row);
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const receipts_column = [
    {
      title: "Tin Number",
      dataIndex: "tin_number",
      width: "10%",
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
            <Popconfirm title="Sure to cancel?" onConfirm={cancelReceipt}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => editReceipt(record)}
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
      key: "item_name",
      width: "15%",
      editable: true,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
      editable: true,
    },
    {
      title: "Item Price",
      dataIndex: "item_price",
      key: "item_price",
      width: "10%",
      editable: true,
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      key: "total_price",
      width: "10%",
      editable: false,
    },
    {
      title: "operation",
      dataIndex: "id",
      key: "operation",
      width: "5%",
      render: (_, record) => {
        const editable = isEditingItems(record);
        return editable ? (
          <span>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record, record.id)}
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
        editing: isEditingItems(record),
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
              <Form form={formReceipt} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={receiptData}
                  rowKey={(receiptData, index) => receiptData.id}
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
                  rowKey={(itemData, index) => itemData.id}
                  rowClassName="editable-row"
                  pagination={{
                    onChange: cancel,
                  }}
                />
              </Form>
            </div>
            {isItemEdit && (
              <Button className="ml-auto col-5" onClick={saveItem}>
                Update Item Data
              </Button>
            )}
            {isReceiptEdit && (
              <Button className="ml-auto col-5" onClick={saveReceipt}>
                Update Receipt Data
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
