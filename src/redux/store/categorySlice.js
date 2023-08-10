import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
    const res = await axios.get('https://dummyjson.com/products/categories');
    return res.data;
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        isLoad: false,
        isErr: null,
    },
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(fetchCategory.pending, (state) => {
                state.isLoad = true;
                state.isErr = null;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.isLoad = false;
                state.categories= action.payload;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.isLoad = false;
                state.isErr = action.error.message;
            })
    },
    
});


export default categorySlice.reducer;