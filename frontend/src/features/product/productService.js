import axiosInstance from '../../api'

const API_URL = 'http://localhost:3090/api/product'

const allProducts = async () => {
  const response = await axiosInstance.post(`${API_URL}/all-products`)

  return response.data
}

const productdetails = async (productId) => {
  const response = await axiosInstance.get(`${API_URL}/products-details`, productId)

  return response.data
}

const productService = {
    allProducts,
    productdetails,
}

export default productService