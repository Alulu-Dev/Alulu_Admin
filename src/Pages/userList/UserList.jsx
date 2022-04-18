import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Table, Tag, Space, columns } from 'antd';
import './userList.scss'
import Navbar from "../../components/Navbar/Navbar"
import 'antd/dist/antd.css'
import {
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons';

function Users() {
 
  const columns = [
    {
    
     title: 'Name',
     dataIndex: 'name',
     key: 'name',
     render: text => <a>{text}</a>,
     },
     {
     title: 'Number of Receipts',
     dataIndex: 'numOfReceipts',
     key: 'numOfReceipts',
     },
     {
     title: 'Status',
     key: 'tags',
   dataIndex: 'tags',
     render: tags => (
     <>
     {tags.map(tag => {
     let color = tag.length > 5 ? 'geekblue' : 'green';
   if (tag === 'Active') {
    color = 'green';
     }
     if (tag==='Blocked'){
       color='red';
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
  
    <button className='userEdit'>
      Edit
    </button>
    
    <DeleteOutlined className='userDelete' />
     </Space>
    ),
     },
    ];
     
     const data = [
     {
     key: '1',
     name: 'John Brown',
     numOfReceipts : '200',
     tags: ['Active'],
     },
     {
      key: '1',
      name: 'Eshtaol Girma',
     numOfReceipts : '10',
      
      tags: ['Blocked'],
      },
      {
        key: '1',
        name: 'Beken Adugna',
       numOfReceipts : '30',
        tags: ['Active'],
        },
        {
          key: '1',
          name: 'Mikiyas Daniel',
         numOfReceipts : '230',
          
          tags: ['Blocked'],
          },
          {
            key: '1',
            name: 'Beken Adugna',
           numOfReceipts : '30',
            tags: ['Active'],
            },
            {
              key: '1',
              name: 'Mikiyas Daniel',
             numOfReceipts : '230',
              
              tags: ['Blocked'],
              },
              {
                key: '1',
                name: 'Beken Adugna',
               numOfReceipts : '30',
                tags: ['Active'],
                },
                {
                  key: '1',
                  name: 'Mikiyas Daniel',
                 numOfReceipts : '230',
                  
                  tags: ['Blocked'],
                  },
                  {
                    key: '1',
                    name: 'Beken Adugna',
                   numOfReceipts : '30',
                    tags: ['Active'],
                    },
                    {
                      key: '1',
                      name: 'Mikiyas Daniel',
                     numOfReceipts : '230',
                      
                      tags: ['Blocked'],
                      },

     
     ];
 



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


export default Users