import { configureStore } from "@reduxjs/toolkit";

// Stores
import productsSlice from "./store/productsSlice";
import categorySlice from "./store/categorySlice";

export default configureStore({
    reducer: {
        products: productsSlice,
        categories: categorySlice,
    }
})