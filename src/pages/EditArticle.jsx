import React from 'react';
import { Button, Input, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editArticle, getArticle } from '../thunks/articleThunks';
import { useNavigate, useParams } from 'react-router';


const EditArticle = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {current, status} = useSelector(state => state.articles);
    const navigate  = useNavigate();
    const { id } = useParams();

    React.useEffect(() => {
        if (!current || current._id !== id) {
            dispatch(getArticle(id));
        }
    }, [dispatch, id, current]);

    const onFinish = async values => {
        console.log('Success:', values);
        await dispatch(editArticle({ ...values, _id: current._id }));
        navigate('/');
    };

    if (status === "loading" || !current) return <p>Loading...</p>;

    return (
        <div>
            <h1>Edit Article</h1>
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                autoComplete="off"
                initialValues={{
                    title: current.title,
                    content: current.content
                }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Content"
                    name="content"
                    rules={[{ required: true, message: 'Please input your content!' }]}
                >
                    <Input.TextArea />
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

export default EditArticle;
