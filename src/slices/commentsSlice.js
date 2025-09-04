import { createSlice } from '@reduxjs/toolkit';
import { getComments } from '../thunks/commentsThunk';
const initialState = {
    comments: [],
    status: 'idle', // idle, loading, success, failed
    error: null
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = action.payload;
            })
            .addCase(getComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default commentsSlice.reducer;