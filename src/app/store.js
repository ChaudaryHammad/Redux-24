import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cart/cartSlice";
import productSlice from "./slice/cart/productSlice";

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice
    }
})