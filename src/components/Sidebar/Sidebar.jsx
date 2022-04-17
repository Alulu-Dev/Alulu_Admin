import "./sidebar.scss"
import { DashboardFilled, UserOutlined,DollarOutlined,PullRequestOutlined,AreaChartOutlined,QuestionCircleOutlined,SettingOutlined,ProfileOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons';
import Navbar from "../Navbar/Navbar"
import { Link } from 'react-router-dom';
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
                        {/* <span>Dashboard</span> */}
                    <span><Link to="/" className="btn">Dashboard</Link></span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                    <UserOutlined className="icon" />
                    <span><Link to="/users" className="btn">Users</Link></span>
                    </li>
                    <li>
                    <DollarOutlined className="icon"/>
                    <span><Link to="/fraud" className="btn">Fraud</Link></span>
                    </li>
                    <li>
                    <PullRequestOutlined className="icon"/>
                    <span><Link to="/request" className="btn">Request</Link></span>
                    </li>
                    <li>
                    <AreaChartOutlined className="icon"/>
                    <span><Link to="/stats" className="btn">Stats</Link></span>
                    </li>
                    <li>
                    <BellOutlined className="icon"/>
                    <span><Link to="/notification" className="btn">Notification</Link></span>
                    </li>
                    <p className="title">Services</p>

                    <li>
                    <SettingOutlined className="icon"/>
                    <span><Link to="/settings" className="btn">Settings</Link></span>
                        
                    </li>
                    <li>
                    <QuestionCircleOutlined className="icon"/>
                    <span><Link to="/faq" className="btn">FAQ</Link></span>
                       
                    </li>
                    <p className="title">User</p>
                    <li>
                    <ProfileOutlined className="icon"/>
                    <span><Link to="/profile" className="btn">Profile</Link></span>
                       
                    </li>
                    <li>
                    <LogoutOutlined className="icon"/>
                    <span><Link to="/login" className="btn">LogOut</Link></span>
                    </li>   
                </ul>
            </div>
            <div className="bottom"></div>

        </div>
    )
}

export default Sidebar