import "./navbar.scss"
import { GlobalOutlined, SearchOutlined, FullscreenExitOutlined,NotificationOutlined,MessageOutlined,UnorderedListOutlined } from "@ant-design/icons"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlined/>
                </div>
                <div className="items">
                    <div className="item">
                        <GlobalOutlined className="icon"/>
                        English
                    </div>
                    <div className="item">
                     {/* <DarkModeOutlined className="icon"/> */}
                    </div>
                    <div className="item">
                    <FullscreenExitOutlined className="icon" />
                    </div>
                    <div className="item">
                    <NotificationOutlined className="icon" />
                    <div className="counter">
                        1
                    </div>
                    </div>
                    <div className="item">
                    <MessageOutlined className="icon"/>
                    <div className="counter">
                        2
                    </div>
                    </div>
                    <div className="item">
                    <UnorderedListOutlined className="icon" />
                    </div>
                    <div className="item">
                    <img src="https://images.pexels.com/photos/7561005/pexels-photo-7561005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar