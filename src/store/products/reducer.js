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
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allProducts = payload
                state.products = payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.loading = false
            })

    }
})

export const { setCartItems, setFilteredItems } = productsReducer.actions
export default productsReducer.reducer