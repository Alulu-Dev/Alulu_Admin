import "./sidebar.scss";
import {
  DashboardFilled,
  UserOutlined,
  DollarOutlined,
  PullRequestOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
const Sidebar = () => {
  const logout = () => {
    sessionStorage.removeItem("Token");
  };
  return (
    <div className="Sidebar">
      <div className="top">
        <span className="logo">Alulu</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardFilled className="icon" />
            {/* <span>Dashboard</span> */}
            <span>
              <Link to="/" className="btn">
                Dashboard
              </Link>
            </span>
          </li>
          <p className="title">Lists</p>
          <li>
            <UserOutlined className="icon" />
            <span>
              <Link to="/users" className="btn">
                Users
              </Link>
            </span>
          </li>
          <li>
            <DollarOutlined className="icon" />
            <span>
              <Link to="/fraud" className="btn">
                Request
              </Link>
            </span>
          </li>
          <li>
            <PullRequestOutlined className="icon" />
            <span>
              <Link to="/matcher" className="btn">
                Matcher
              </Link>
            </span>
          </li>

          <p className="title">Services</p>

          <li>
            <QuestionCircleOutlined className="icon" />
            <span>
              <Link to="/faq" className="btn">
                FAQ
              </Link>
            </span>
          </li>
          <p className="title">User</p>

          <li>
            <LogoutOutlined className="icon" />
            <span>
              <Link to="/login" onClick={logout} className="btn">
                LogOut
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
