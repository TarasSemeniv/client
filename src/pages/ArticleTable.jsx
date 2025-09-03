import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../thunks/articleThunks';
import './pages.css';
import { useNavigate } from 'react-router';
import { deleteArticle } from '../thunks/articleThunks';


const ArticleTable = () => {
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
                    <div>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                    <div>
                        <button>Edit</button>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            dispatch(deleteArticle(article._id));
                        }}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArticleTable;
