import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cart/cartSlice";

export const store = configureStore({
    reducer:{
        cart:cartSlice,

    }
})