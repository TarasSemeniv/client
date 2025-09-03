import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/api";
import { getToken } from "../utils/token";

export const getArticles = createAsyncThunk('articles/getArticles', async () => {
    const response = await Api.get('/articles');
    return response.data;
});

export const getArticle = createAsyncThunk('articles/getArticle', async (id) => {
    const response = await Api.get(`/articles/${id}`);
    console.log(response)
    return response.data;
});
 
export const createArticle = createAsyncThunk('articles/createArticle', async (article) => {
    const response = await Api.post('/articles', article, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id) => {
    const response = await Api.delete(`/articles/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return { _id: id };
});