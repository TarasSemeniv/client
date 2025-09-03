import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"
import articleReducer from "../slices/articleSlice"
import authReducer from "../slices/authSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        articles: articleReducer,
        auth: authReducer
    }
})

export default store;