import axiosInstance from '../../api'

const API_URL = 'http://localhost:3090/api/order'
const user = localStorage.getItem('user')

// creat order
const createOrder = async (ordertDetails) => {
    const response = await axiosInstance.post(`${API_URL}/create-order/${user}`, { data: ordertDetails })
    
    return response.data
  }

const orderService = {
    createOrder,
}

export default orderService