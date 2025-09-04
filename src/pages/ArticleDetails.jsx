import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getArticle } from '../thunks/articleThunks';
import useAuth from '../hooks/useAuth';
import { Input, Button } from 'antd';
import { getComments } from '../thunks/commentsThunk';

const ArticleDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { current } = useSelector((state) => state.articles);
    const comments = useSelector((state) => state.comments.comments);

    const isAuth = useAuth();

    useEffect(() => {
        dispatch(getArticle(id))
        dispatch(getComments(id))
    }, [dispatch, id])

    if (!current ) return null;

    return (
        <div>
            <h2>{current.title}</h2>
            <p>{current.content}</p>
            <p>{current.createdAt}</p>

            <div>
                <h3>Comments</h3>
                {isAuth ? <div style={{ display: 'flex' }}> <Input.TextArea rows={1} placeholder="Add a comment..." /> <Button type="primary">Submit</Button> </div> :
                    <h1>Please log in to comment</h1>}
                {comments.map(comment => (
                    <div key={comment._id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArticleDetails;
