import React from 'react';
import { Form, Input, Button, DatePicker, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { createArticle } from '../thunks/articleThunks';

const CreateArticle = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [api, contextHolder] = notification.useNotification();

    const openNotification = pauseOnHover => () => {
        api.open({
            message: 'Notification Title',
            description: 'Success',
            showProgress: true,
            pauseOnHover,
            placement: "topRight",
        });
    };

    const onFinish = values => {
        console.log('Success:', values);
        dispatch(createArticle(values))
        form.resetFields();
        openNotification(false)();
    };

    return (
        <div>
            <h1>Create Article</h1>
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                    rules={[{ required: true, message: 'Please input content!' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="date"
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </div>
    );
}

export default CreateArticle;
