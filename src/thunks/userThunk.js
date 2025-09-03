import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api"
import { getToken } from "../utils/token";

export const updateUser = createAsyncThunk('updateUser', async (userData, { rejectWithValue }) => {
    try {
        const response = await api.put(`users/${userData._id}`, userData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data);
        }
        return rejectWithValue('Network error or server unavailable.');
    }
});
