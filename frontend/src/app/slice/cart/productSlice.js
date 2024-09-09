import { createSlice } from "@reduxjs/toolkit";
const STATUS = Object.freeze({
    IDLE:"idle",
    LOADING:"loading",
    SUCCEEDED:"succeeded",
    FAILED:"failed"

})


const productSlice = createSlice({
    
    name:"product",
    initialState:{
    
        status:STATUS.IDLE,
        data:[],
    },

    reducers:{
        setProducts(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }

})


export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;


export function fetchProducts(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.IDLE));
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.SUCCEEDED));
            
        } catch (error) {
            dispatch(setStatus(STATUS.FAILED));
            
        }
    }
}