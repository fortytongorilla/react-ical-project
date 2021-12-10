import React, { useState, useEffect } from "react";

import { Form, Input, Button, Checkbox, Steps } from "antd";

const { Step } = Steps;

export const MainForm = () => {
  const [stepState, setStepState] = useState(0);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-container">
      Lets schedule an appointment...
      <div className="form-box">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="progress-bar">
        <Steps size="small" current={stepState}>
          <Step title="Step One" />
          <Step title="Step Two" />
          <Step title="Step Three" />
        </Steps>
      </div>
    </div>
  );
};
