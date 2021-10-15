import React from "react";
import { Menu, Layout, Row, Col } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import styled from "styled-components";

const LayoutContainer = styled(Layout)`
  background-color: ${({ theme }) => theme.container};
  min-height: 100vh;
`;
const Logo = styled.div`
  color: #fff;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

function AsideMenu(props: any) {
  const { children } = props;

  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;
  const handleLogout = () => {
    localStorage.setItem("accessToken", "");
  };

  return (
    <Layout>
      <Sider
        style={{
          display: "block",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <Logo>LOGO</Logo>

        <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">홈</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/sub1">서브1</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="서브2">
            <Menu.Item key="3">
              <Link to="/sub2">서브2-1</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/sub2">서브2-2</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/sub2">서브2-3</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/sub2">서브2-4</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/sub2">서브2-5</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="7" onClick={handleLogout}>
            로그아웃
          </Menu.Item>
        </Menu>
      </Sider>
      <LayoutContainer
        style={{
          marginLeft: 200,
          border: "3px solid red",
        }}
      >
        <Content>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Content>
      </LayoutContainer>
    </Layout>
  );
}

export default AsideMenu;
