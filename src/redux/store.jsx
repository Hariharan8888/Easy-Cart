import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './productSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        cart: cartSlice,
        product: ProductSlice
    },
})

export default store