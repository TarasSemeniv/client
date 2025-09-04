import { createSlice } from "@reduxjs/toolkit"
import { getArticle, getArticles, deleteArticle, editArticle } from "../thunks/articleThunks"

const initialValues = {
    data: [],
    current: null,
    loading: 'idle',
    error: null
}

const articleSlice = createSlice({
    name: "articles", 
    initialState: initialValues,
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getArticle.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getArticle.fulfilled, (state, action) => {
                state.status = "success";
                state.current = action.payload;
            })
            .addCase(getArticle.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteArticle.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteArticle.fulfilled, (state, action) => {
                state.status = "success";
                state.data = state.data.filter(article => article._id !== action.payload._id);
            })
            .addCase(deleteArticle.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(editArticle.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editArticle.fulfilled, (state, action) => {
                state.status = "success";
                state.data = state.data.map(article => article._id === action.payload._id ? action.payload : article);
                if (state.current && state.current._id === action.payload._id) {
                    state.current = action.payload;
                }
            })
            .addCase(editArticle.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default articleSlice.reducer;