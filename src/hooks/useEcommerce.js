import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../store/products/reducer';
import { useEffect } from 'react';

export const useEcommerce = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.productsReducer)
    let oldCartItems = JSON.parse( localStorage.getItem("cart"));
    useEffect(() => {
    }, [cartItems])

    return {
        addToCart: (id) => {
            const isItemsIn = oldCartItems?.some((pid) => pid === id);
            if (!isItemsIn) {
                oldCartItems.push(id);
                localStorage.setItem("cart", JSON.stringify(oldCartItems));
                dispatch(setCartItems(oldCartItems));
            }
        },
        removeCartItem: (id) => {
            const newCartItems = oldCartItems?.filter((pid) => pid !== id);
            localStorage.setItem("cart", JSON.stringify(newCartItems));
            dispatch(setCartItems(newCartItems));
        }
    }
}
