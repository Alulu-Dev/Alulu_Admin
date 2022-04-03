import "./sidebar.scss"
import { DashboardFilled, UserOutlined,DollarOutlined,PullRequestOutlined,AreaChartOutlined,QuestionCircleOutlined,SettingOutlined,ProfileOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons';
import Navbar from "../Navbar/Navbar"
const Sidebar = () =>{
    return (
        
        <div className="Sidebar">
            
            <div className="top"><span className="logo">Alulu</span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                    <DashboardFilled className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                    <UserOutlined className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                    <DollarOutlined className="icon"/>
                        <span>Fraud</span>
                    </li>
                    <li>
                    <PullRequestOutlined className="icon"/>
                        <span>Request</span>
                    </li>
                    <li>
                    <AreaChartOutlined className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                    <BellOutlined className="icon"/>
                        <span>Notification</span>
                    </li>
                    <p className="title">Services</p>

                    <li>
                    <SettingOutlined className="icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                    <QuestionCircleOutlined className="icon"/>
                        <span>FAQ</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                    <ProfileOutlined className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                    <LogoutOutlined className="icon"/>
                        <span>LogOut</span>
                    </li>
                    
                </ul>
            </div>
            <div className="bottom"></div>

        </div>
    )
}

export default Sidebar