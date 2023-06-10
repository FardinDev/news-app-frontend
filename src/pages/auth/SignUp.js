import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Form, Input, Layout, Space } from 'antd'
import { Header } from 'antd/es/layout/layout';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import userActions from '../../helpers/userActions';

function SignUp() {
  const { setUser, setToken, setAuthenticated } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false)

  const onFinish = (values) => {
    setIsLoading(true);

    userActions.register(values.fullName, values.email, values.newPassword).then((userData) => {
      if (!Object.keys(userData).includes("error")) {
        setUser(userData);
        setToken(userData?.token);
        setAuthenticated(true);

      } else {
        // Handle your error message rendering here
        console.log(userData);

      }
      setIsLoading(false);
    });
  };

  return (
    <Layout style={{
      background: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      height: '100vh'
    }}>
      <Card style={{ width: 400, textAlign: 'center' }}>
        <h2>
          Sign Up
        </h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: 'Please enter your full name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} type='text' placeholder="Full name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} type='email' placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>



          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Sign up
          </Button>


          <div style={{ marginTop: 20 }}>

            <Link to={'/sign-in'}>
              Log In
            </Link>
            <label style={{ marginLeft: 5 }}>
              if you are already registered
            </label>
          </div>
        </Form>
      </Card>
    </Layout>
  )
}

export default SignUp