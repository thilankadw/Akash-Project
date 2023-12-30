import axiosInstance from '../../api'

const API_URL = 'http://localhost:3090/api/cart'
const user = localStorage.getItem('user')

// add to cart
const addToCart = async (cartProductDetails) => {
  const response = await axiosInstance.post(`${API_URL}/add-to-cart/${user}`, cartProductDetails)
  
  return response.data
}

// view cart
const viewCart = async () => {
  const response = await axiosInstance.get(`${API_URL}/view-cart/${user}`)

  return response.data
}

// delete from cart
const deleteFromCart = async (cartDeleteData) => {
  const response = await axiosInstance.delete(`${API_URL}/delete-from-cart/${user}`, { data: cartDeleteData })
  
  return { message: response.data.message, productId: cartDeleteData.productId };
}

const cartService = {
  addToCart,
  viewCart,
  deleteFromCart,
}

export default cartService