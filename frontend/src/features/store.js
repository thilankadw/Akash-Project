import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import cartReducer from './cart/cartSlice'
import productReducer from './product/productSlice'
import orderReducer from './order/orderSlice'
import contactReducer from './contact/contactSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    order: orderReducer,
    contact: contactReducer,
  },
})