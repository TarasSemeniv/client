import { Button, Input, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../thunks/userThunk';
import { useEffect } from 'react';

const Profile = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const user = useSelector(state => state.auth.user);

    const onFinish = async values => {
        console.log('Success:', values);
        await dispatch(updateUser({ ...values, _id: user._id }));
    };

    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                name: user.name,
                email: user.email,
                password: "",
                role: user.role
            });
        }
    }, [user, form]);

    return (
        <div>
            <h1>Profile</h1>
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                autoComplete="off"
                initialValues={{
                    name: user.name,
                    email: user.email
                }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Role"
                    name="role"
                    rules={[{ required: true, message: 'Please input your role!' }]}
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
                        Change Profile
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Profile;
