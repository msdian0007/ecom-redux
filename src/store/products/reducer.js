import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./thunk";

const initialState = {
    loading: false,
    allProducts: [],
    products: [],
    cartItems: [],
}

const productsReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCartItems: (state, { payload }) => {
            state.cartItems = payload
        },
        setFilteredItems: (state, { payload }) => {
            state.products = payload
        }
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.allProducts = payload
            state.products = payload
        },
        [getProducts.rejected]: (state, { payload }) => {
            state.loading = false
        }
    }
})

export const { setCartItems, setFilteredItems } = productsReducer.actions
export default productsReducer.reducer