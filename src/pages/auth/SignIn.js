import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Form, Input, Layout, Space } from 'antd'
import { Header } from 'antd/es/layout/layout';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import userActions from '../../helpers/userActions';
import { UserContext } from '../../context/UserContext';

function SignIn() {
    const { setUser, setToken, setAuthenticated } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(false)

    const onFinish = (values) => {
        setIsLoading(true);

        userActions.logIn(values.email, values.password).then((userData) => {
            if (!Object.keys(userData).includes("error")) {
                setUser(userData);
                setToken(userData?.token)
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
            height: '100vh',
            flexDirection: 'column',
        }}>
            <Card style={{ width: 400, textAlign: 'center' }}>
                <h2>
                    Sign in
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
                        name="password"
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
                            placeholder="Password"
                        />
                    </Form.Item>



                    <Button type="primary" htmlType="submit" className="login-form-button" block loading={isLoading} disabled={isLoading}>
                        Log in
                    </Button>


                    <div style={{ marginTop: 20 }}>

                        <Link to={'/sign-up'}>
                            Register here
                        </Link>
                        <label style={{ marginLeft: 5 }}>
                            if you haven't already
                        </label>
                    </div>
                    <br />
                    <div >
                        <label >

                            <Link to={'/'} >
                                Continue as guest
                            </Link>
                        </label>
                    </div>
                </Form>
            </Card>
        </Layout>
    )
}

export default SignIn