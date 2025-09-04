import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api/api";

export const getComments = createAsyncThunk('comments/getComments', async (articleId) => {
    const response = await Api.get(`/comments/${articleId}`);
    return response.data;
});

export const createComment = createAsyncThunk('comments/createComment', async (comment) => {
    const response = await Api.post('/comments', comment);
    return response.data;
});