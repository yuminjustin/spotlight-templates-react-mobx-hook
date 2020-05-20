import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "antd";
import Left from "./layout/menu";
import Content from "./layout/content";
import Heads from "./layout/head";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <HashRouter>
      <Layout style=\{{ height: "100vh" }}>
        <Left
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />
        <Layout className="site-layout">
          <Heads />
          <Content />
        </Layout>
      </Layout>
    </HashRouter>
  );
  // }
};

export default App;
