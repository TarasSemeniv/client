import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"
import articleReducer from "../slices/articleSlice"
import authReducer from "../slices/authSlice"
import commentsReducer from "../slices/commentsSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        articles: articleReducer,
        auth: authReducer,
        comments: commentsReducer
    }
})

export default store;