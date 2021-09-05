import React, { useState, useCallback, Fragment } from "react";
import {
  Form,
  Checkbox,
  Input,
  Button,
  Col,
  Row,
  Select,
  InputNumber,
  useForm,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const onChangeTnc = (e) => {
    console.log(e.target.checked);
    form.setFieldsValue({
      tnc: e.target.checked,
    });
    return;
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          gender: "Male",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Female",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Other",
        });
    }
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
      <Form
        onFinish={(values) => onSubmit(values)}
        form={form}
        layout="vertical"
      >
        <Row>
          <Col className="p5 pr-1" span={12}>
            <Form.Item label="Full Name" name="name" required>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item label="Phone Number" name="ph_number">
              <Input type="phone" maxLength="10" placeholder="Phone Number" />
            </Form.Item>

            <Form.Item label="Gender" name="gender">
              <Select onChange={onGenderChange} placeholder="Gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>

          <Col className="p5 pl-1" span={12}>
            <Form.Item label="Work Email Id" name="email">
              <Input placeholder="Work Email Id" />
            </Form.Item>

            <Form.Item label="Organization" required name="organization">
              <Input placeholder="Organization" />
            </Form.Item>

            <Form.Item name="tnc">
              <Checkbox onChange={onChangeTnc}>Terms & conditions.</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
            
          </Col>
        </Row>
        {/* <Row className="p5 pt-0">
          
        </Row> */}
      </Form>
    </Fragment>
  );
};

export default Register;

// Organization / Company Name (Text field)--

// Full Name of the user (Text field)--

// Gender (Radio Button)--

// Work Email Id (Text field)--

// Desired Password (Text field)--

// Phone number of the user (Text field)--

// Terms and Privacy Policy (checkbox)

// Register (button)
