import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../thunks/articleThunks';
import './pages.css';
import { useNavigate } from 'react-router';


const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])


    return (
        <div className='articles-container'>
            {articles.data.map(article => 
                <div key={article._id} className='article-card' onClick={() => navigate(`/articles/${article._id}`)}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </div>
            )}
        </div>
    );
}

export default Articles;
