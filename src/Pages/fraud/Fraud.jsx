import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Table, Tag, Space, columns } from 'antd';
import './fraud.scss'
import Navbar from "../../components/Navbar/Navbar"
import 'antd/dist/antd.css'

function Fraud() {
 
  const columns = [
    {
     title: 'Name',
     dataIndex: 'name',
     key: 'name',
     render: text => <a>{text}</a>,
     },
     {
     title: 'Age',
     dataIndex: 'age',
     key: 'age',
     },
     {
     title: 'Address',
     dataIndex: 'address',
     key: 'address',
     },
     {
     title: 'Tags',
     key: 'tags',
   dataIndex: 'tags',
     render: tags => (
     <>
     {tags.map(tag => {
     let color = tag.length > 5 ? 'geekblue' : 'green';
   if (tag === 'loser') {
    color = 'volcano';
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
   title: 'Action',
  key: 'action',
    render: (text, record) => (
     <Space size="middle">
  <a>Invite {record.name}</a>
    <a>Delete</a>
     </Space>
    ),
     },
    ];
     
     const data = [
     {
     key: '1',
     name: 'John Brown',
     age: 32,
     address: 'New York No. 1 Lake Park',
     tags: ['nice', 'developer'],
     },
     {
     key: '2',
     name: 'Jim Green',
     age: 42,
     address: 'London No. 1 Lake Park',
     tags: ['loser'],
     },
     {
     key: '3',
     name: 'Joe Black',
     age: 32,
     address: 'Sidney No. 1 Lake Park',
     tags: ['cool', 'teacher'],
     },
     ];
 
  // ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);


return (

  <div className='user'>
          <div className="usersContainer">
              <div className='row'>
                <div className='col-2 sidebar'>
                <Sidebar/> 
                
              </div>

                 <div className='userTable col-10 main'>
                   <Navbar className="nav"/>
                   <Table columns={columns} 
                    dataSource={data}
                    mountNode />
                 
            </div>
          </div>
        </div>
  
  
</div>
)
}


export default Fraud