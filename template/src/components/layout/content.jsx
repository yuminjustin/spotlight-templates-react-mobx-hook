import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router";
import { Layout, Spin, Space } from "antd";
import style from "B/assets/css/style.css";
const { Content } = Layout,
  Hello = lazy(() => import("../hello")),
  Demo = lazy(() => import("../demo")),
  Test = lazy(() => import("../test")),
  NoMatch = lazy(() => import("../error")),
  Contents = () => {
    return (
      <Content className={style.content}>
        <Suspense
          fallback={
            <div className={style._error_404}>
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/test" component={Test} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Content>
    );
  };

export default Contents;
