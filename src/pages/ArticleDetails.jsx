import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getArticle } from '../thunks/articleThunks';

const ArticleDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {current} = useSelector((state) => state.articles);

    useEffect(() => {
        dispatch(getArticle(id))
    }, [dispatch, id])

    if (!current) return null;

    return (
        <div>
            <h2>{current.title}</h2>
            <p>{current.content}</p>
            <p>{current.createdAt}</p>
        </div>
    );
}

export default ArticleDetails;
