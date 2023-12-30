import axios from 'axios'
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:3090/api/user'

// Register user
const register = async (userData) => {
  const response = await axios.post('http://localhost:3090/api/user/signup', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.userId))
    Cookies.set('accessToken', response.data.accessToken, { expires: 7 });
    Cookies.set('refreshToken', response.data.refreshToken, { expires: 14 });
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('http://localhost:3090/api/user/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.userId))
    
    Cookies.set('accessToken', response.data.accessToken);
    Cookies.set('refreshToken', response.data.refreshToken);
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService