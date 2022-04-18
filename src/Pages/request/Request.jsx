import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from "../../components/Navbar/Navbar"
import 'antd/dist/antd.css'
import './request.scss'


import { Form, Input, Button, Checkbox,DatePicker,Space } from 'antd';

function Request() {
  const [value, onChange] = useState(new Date());
    const Demo = () => {
        const onFinish = (values: any) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };
      
        return (
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tin number"
              name="tin"
              rules={[{  message: 'Please input your username!' }]}
            >
              <Input placeholder="000130532" />
            </Form.Item>
            <Form.Item
              label="FS number"
              name="fs"
              rules={[{  message: 'Please input your username!' }]}
            >
              <Input placeholder="00105985" />
            </Form.Item>
            
            <Form.Item
            
          
              label="Issued date"
              name="issuedDate"
              rules={[{  message: 'Please input your username!' }]}
              
            >
              <Input placeholder="11/11/2022" />
            </Form.Item>
            <Form.Item
            
          
              label="Company Name"
              name="companyName"
              rules={[{  message: 'Please input your username!' }]}
              
            >
              <Input placeholder="Kaldis coffee"/>
            </Form.Item>
            <Form.Item
            
          
              label="Total Price"
              name="totalPrice"
              rules={[{  message: 'Please input your username!' }]}
              
            >
              <Input placeholder="1000$"/>
            </Form.Item>
            <Form.Item
            
          
              label="Register Number"
              name="registerNumber"
              rules={[{  message: 'Please input your username!' }]}
              
            >
              <Input placeholder="00000" />
            </Form.Item>
           <div>ITEM</div>
            <Form.Item
            
          
              label="Item Name"
              name="itemName"
              rules={[{  message: 'Please input your username!' }]}
              
            >
              <Input placeholder="Soft Drinks" />
            </Form.Item>
            <Form.Item
            
          
              label="Quantity"
              name="quantity"
              rules={[{  message: 'Please input your username!' }]}
              
            >
              <Input placeholder="20" />
            </Form.Item>
            <Form.Item
            
          
              label="Item Price"
              name="itemPrice"
              rules={[{  message: 'Please input your username!' }]}
              
            >
              <Input placeholder="20$" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 5, span: 2 }}>
               <Button type="submit" variant='primary btn-block' className='btnn '>
        Submit
  </Button> 
            </Form.Item>

            
          </Form>
        );
      };
    //   ReactDOM.render(<Demo />, mountNode);
return (   
  <div className='req'>
          <div className="usersContainer">
              <div className='row'>
                <div className='col-2 sidebar'>
                <Sidebar/> 
                
              </div>

                 <div className='receiptImage col-10'>
                   <Navbar className="nav"/>
                   <div className='row'>
                       <div className='col-6 imgg'>
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/02/bd/b0/b1/yod-abyssinia-traditional.jpg" alt="" className="receipt_image" />
                           
                       </div>
                       <div className='col-6 formm'>
                       <Demo 
                    mountNode />
                       </div>
                   </div>
                  
            </div>
          </div>
        </div>
  
  
</div>
)
}


export default Request