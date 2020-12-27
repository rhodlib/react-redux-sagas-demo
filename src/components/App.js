import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined
} from "@ant-design/icons";
import Users from './Users';
import Counter from './Counter';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            Counter
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "20px 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Users/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Rhodlib ©2020
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
