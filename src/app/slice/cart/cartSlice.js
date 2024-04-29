// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";



// const cartSlice = createSlice({
//     name:"cart",
//     initialState:JSON.parse(localStorage.getItem("cart") || "[]"),


//     reducers:{
//         addToCart:(state,action)=>{
//             const newItem = action.payload;
//             const existingItem = state.find(item => item.id === newItem.id);
//             if(existingItem){
//                 existingItem.quantity += newItem.quantity;
//             }else{
//                 state.push(newItem);
//             }
//             localStorage.setItem("cart",JSON.stringify(state));
//         },

//         removeFromCart:(state,action)=>{
//             const id = action.payload;
//             return state.filter(item => item.id !== id);
//         },

//         updateQuantity:(state,action)=>{
//             const {id,quantity}= action.payload;
//             const itemUpdate = state.find(item => item.id === id);
//             if(itemUpdate){
//                 itemUpdate.quantity = quantity;
//             }

//             localStorage.setItem("cart",JSON.stringify(state))

//         }


//     }
// })



// export const {addToCart,removeFromCart,updateQuantity} = cartSlice.actions;
// export default cartSlice.reducer;






const cartSlice = createSlice({
     initialState : JSON.parse(localStorage.getItem("cart") || "[]"),
     name: "cart",

     reducers:{
        add(state,action){
            const newItwm = action.payload;
            const existingItem = state.find((item)=> item.id === newItwm.id);
            if(existingItem){
                alert("Item already exist in cart")
            }
            else{
                state.push(newItwm);
            }

          

        },

        remove(state,action){
            state.filter((item)=> item.id !== action.payload)
        }
     }
})


export const  {add , remove} = cartSlice.actions;
export default cartSlice.reducer;