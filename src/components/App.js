import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  RightCircleOutlined
} from "@ant-design/icons";
import {BrowserRouter ,Route, Link, Switch, Redirect} from 'react-router-dom';

//Routes
import HomePage from '../routes/HomePage';
import UsersPage from '../routes/UsersPage';
import CounterPage from '../routes/CounterPage';

const { Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  return (
    <BrowserRouter>
    
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<RightCircleOutlined />}>
              <Link to="/counter">Counter</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Switch>
            <Route exact path="/home">
              <HomePage/>
            </Route>
            <Route exact path="/users">
              <UsersPage/>
            </Route>
            <Route exact path="/counter">
              <CounterPage/>
            </Route>
            <Redirect to="/home"/>
          </Switch>
          <Footer style={{ textAlign: "center" }}>
            Rhodlib ©2020
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
