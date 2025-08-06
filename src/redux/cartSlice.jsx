import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'products',
    initialState : {
        products: []
    },
    reducers : {
        
    },
})


export const {setProducts} = cartSlice.actions;
export default cartSlice.reducer;