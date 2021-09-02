import { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  FormOutlined
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
  };

  const rightAlighStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'right',
  }

  return (
    <Menu
      style={rightAlighStyle}
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      
        <Menu.Item style={{color:"black"}} key="home" icon={<HomeOutlined />}>
          <Link style={{color:"black"}} to={"/"} className="nav-link">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item style={{color:"black"}} key="about" icon={<AppstoreOutlined />}>
          <Link style={{color:"black"}} to={"/about"} className="nav-link">
            About
          </Link>
        </Menu.Item>
        <Menu.Item style={{color:"black"}} key="register" icon={<FormOutlined />}>
          <Link style={{color:"black"}} to={"/register"} className="nav-link">
          Register
          </Link>
        </Menu.Item>

    </Menu>
  );
};

export default Navbar;
