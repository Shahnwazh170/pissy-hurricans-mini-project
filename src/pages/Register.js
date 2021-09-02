import React, { useState, Fragment } from "react";
import { Form, Input, Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Register = () => {
  const [form] = Form.useForm();

  return (
    <Fragment>
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item label="Field A" required tooltip="This is a required field">
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item
          label="Field B"
          tooltip={{
            title: "Tooltip with customize icon",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
      
    </Fragment>
  );
};

export default Register;
