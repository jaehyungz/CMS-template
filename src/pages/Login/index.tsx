import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
  height: 100vh;
`;
const Logo = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 100px;
`;

function Login() {
  const adminInfo = {
    username: "master",
    password: "1234",
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    console.log(values);
    console.log(adminInfo);
    if (JSON.stringify(values) === JSON.stringify(adminInfo)) {
      localStorage.setItem("accessToken", "true");
      return notification.success({ message: "성공" });
    } else {
      return notification.error({ message: "아이디 확인해" });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    return notification.error({ message: "다 입력해라" });
  };

  return (
    <Container>
      <Logo>LOGO</Logo>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export default Login;
