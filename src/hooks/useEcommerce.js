import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, setFilteredItems } from '../store/products/reducer';
import { useEffect } from 'react';

export const useEcommerce = () => {
    const dispatch = useDispatch();
    const { cartItems, allProducts } = useSelector((state) => state.productsReducer)

    let oldCartItems = JSON.parse(localStorage.getItem("cart"));
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
        },
        productSearch: (text) => {
            const SearchedProduct = allProducts.filter((prod) => {
                return Object.values(prod)
                    .join(" ")
                    .toLowerCase()
                    .includes(text.toLowerCase());
            });
            if (SearchedProduct.length > 0) {
                dispatch(setFilteredItems(SearchedProduct));
            } else {
                dispatch(setFilteredItems([]));
            }
        },
        debounce: (cb) => {
            let timer
            return (args) => {
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    timer = null
                    cb(args)
                }, 1000)
            }
        }

    }
}
