import React from 'react';
import "./widget.scss"
import { UpOutlined,UserOutlined,MoneyCollectOutlined,PullRequestOutlined,ReconciliationOutlined } from '@ant-design/icons';



const Widget = ({type}) => {

//Tempo
const amount =1000
const diff = 20


    let data;

        switch(type){
            case "user":
                data={
                    title:"USERS",
                    isMoney:false,
                    link:"See all users",
                    icon:<UserOutlined className='icon'/>
                };
                break;
                case "fraud":
                    data={
                    title:"FRAUD",
                    isMoney:false,
                    link:"See all fraud cases",
                    icon:<MoneyCollectOutlined className='icon'/>
                };
                break;
                case "request":
                    data={
                    title:"REQUEST",
                    isMoney:false,
                    link:"See all requests",
                    icon:<PullRequestOutlined className='icon'/>
                };
                break;
                case "receiptUpload":
                    data={
                    title:"RECEIPTS",
                    isMoney:false,
                    link:"See uploaded receipts",
                    icon:<ReconciliationOutlined className='icon'/>
                };
            
                break;
                default:
                    break;

        }
    return (
        <div className="widget">
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{amount}</span>
                <span className='link'>{data.link}</span>

            </div>
            <div className="right">
                <div className="percentage negative">
                <UpOutlined />
                    {diff}%
                </div>
                {data.icon}
                
            </div>
        </div>
    )

}

export default Widget