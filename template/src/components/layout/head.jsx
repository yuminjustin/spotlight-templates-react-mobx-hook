import React, { useEffect } from "react";
import { useObserver, inject } from "mobx-react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "B/assets/css/style.css";
const { Header } = Layout;

const Heads = inject("user")((props) => {
  useEffect(() => {
    props.user.getUser();
  });
  return useObserver(() => (
    <Header className={style.head}>
      <Avatar size={32} icon={<UserOutlined />} />
      <span>Hello，{props.user.name}</span>
    </Header>
  ));
});

export default Heads;
