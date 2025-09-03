import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api"
import { getToken } from "../utils/token";

export const login = createAsyncThunk('login', async (user, {rejectWithValue}) => {
    try {
        const response = await api.post('login', user);
        return response.data;
    }
    catch (err) {
        if (err.response) {
            return rejectWithValue(err.response.data);
        } else {
            return rejectWithValue('Мережева помилка або сервер недоступний.');
        }
    }
})

export const getAuthUser = createAsyncThunk('getAuthUser', async () => {
    const response = await api.post('authUser', null, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
})

export const register = createAsyncThunk('register', async (user, {rejectWithValue}) => {
    try {
        const response = await api.post('register', user);
        return response.data;
    }
    catch (err) {
        if (err.response) {
            return rejectWithValue(err.response.data);
        } else {
            return rejectWithValue('Мережева помилка або сервер недоступний.');
        }
    }
})