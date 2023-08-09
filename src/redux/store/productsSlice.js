import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('products/fetchData', async () => {
    const res = await axios.get('https://dummyjson.com/products');
    //console.log(res.data); // {limit, products: [], skip, total} geldi
    return res.data.products;
});


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        isLoad: false,
        isErr: null,
    },
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(fetchData.pending, (state) => {
                state.isLoad = true;
                state.isErr = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoad = false;
                state.data= action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoad = false;
                state.isErr = action.error.message;
            })
    },
    
});


export default productsSlice.reducer;