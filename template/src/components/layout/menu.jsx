import React from "react";
import { Link } from "react-router-dom";
import {
  OrderedListOutlined,
  PlusOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import style from "B/assets/css/style.css";

const Left = (props) => {
  const { collapsed, onCollapse } = props;

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className={style.logo}>
        <Link to="/">
          <svg
            t="1589857638634"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3855"
            data-spm-anchor-id="a313x.7781069.0.i13"
            width="36"
            height="36"
          >
            <path
              d="M509.44 403.2c-26.88 0-48.64 21.76-48.64 48.64s21.76 48.64 48.64 48.64 48.64-21.76 48.64-48.64c1.28-26.88-20.48-48.64-48.64-48.64z m104.96 53.76c0 26.88 21.76 48.64 48.64 48.64s48.64-21.76 48.64-48.64-21.76-48.64-48.64-48.64c-26.88-1.28-48.64 20.48-48.64 48.64zM512 0C229.12 0 0 229.12 0 512s229.12 512 512 512 512-229.12 512-512S794.88 0 512 0z m243.2 509.44c-14.08 117.76-138.24 200.96-267.52 192-14.08-1.28-29.44 1.28-42.24 7.68l-87.04 47.36c-12.8 6.4-23.04 1.28-26.88-1.28s-12.8-10.24-12.8-24.32l2.56-70.4c1.28-19.2 3.84-46.08-12.8-58.88-56.32-44.8-57.6-97.28-51.2-152.32 12.8-111.36 115.2-195.84 234.24-195.84 10.24 0 21.76 1.28 32 2.56 65.28 7.68 128 34.56 167.68 83.2 44.8 46.08 70.4 111.36 64 170.24zM353.28 403.2c-26.88 0-48.64 21.76-48.64 48.64s21.76 48.64 48.64 48.64 48.64-21.76 48.64-48.64-21.76-48.64-48.64-48.64z"
              p-id="3856"
              fill="#ffffff"
            ></path>
          </svg>
          <span>React Hook</span>
        </Link>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PlusOutlined />}>
          <Link to="/demo">Todo demo</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<OrderedListOutlined />}>
          <Link to="/test">List</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
          <Link to="/logout">404</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Left;
