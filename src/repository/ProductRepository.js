import axiosInstance from "./Repository";

class ProductRepository {
    async getProductByIdReq(param) {
        const response = await axiosInstance.get(`/products/${param}`).then((response) => {
            return response
        }).catch((error) => {
            console.log(error)
        })
        return response
    }
}

export default new ProductRepository()