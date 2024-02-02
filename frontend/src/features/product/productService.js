import axiosInstance from '../../api'

const API_URL = 'http://localhost:3090/api/product'

const allProducts = async (currentPage, type) => {
  const response = await axiosInstance.post(`${API_URL}/all-products?page=${currentPage}&limit=3&type=${type}`)
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