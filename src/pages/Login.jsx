import { Button, Input, Form, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../thunks/authThunk';
import { useNavigate } from 'react-router';

const Login = () => {
    const auth = useSelector((state => state.auth))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async values => {
        const resultAction = await dispatch(login(values));
        if (login.fulfilled.match(resultAction))
            navigate('/');
    };
    
    return (
        <>
            <h1>Login</h1>
            {auth.status === "failed" && <Typography.Text type='danger'>{auth.error}</Typography.Text>}
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            >
                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password />
                </Form.Item>


                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Login;
