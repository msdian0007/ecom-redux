import React from 'react'
import { useDispatch } from 'react-redux';
import { setCartItems } from '../store/products/reducer';

export const useEcommerce = () => {
    const dispatch = useDispatch();
    let oldCartItems = JSON.parse(localStorage.getItem("cart"));

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
