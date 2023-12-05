import React from 'react'
import { useState } from 'react'
import ProductRepository from '../repository/ProductRepository'

export const useGetProduct = () => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null)
    const [products, setProducts] = useState([])
    return {
        loading,
        product,
        products,
        getProductById: async (param) => {
            setLoading(true)
            const responseData = await ProductRepository.getProductByIdReq(param)
            if (responseData) {
                setProduct(responseData.data)
                setTimeout(() => {
                    setLoading(false)
                }, 250)
            }
        }
    }
}
