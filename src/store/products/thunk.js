import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../repository/Repository";

export const getProducts = createAsyncThunk('products/get', async (params, { rejectWithValue, fulfillWithValue }) => {
    try {
        const response = await axiosInstance.get('/products')
        return response.data
    } catch (error) {
        return rejectWithValue("Oops something went wrong!")
    }

})