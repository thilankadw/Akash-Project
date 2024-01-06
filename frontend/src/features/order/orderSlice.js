import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderService from './orderService'
import toast from 'react-hot-toast';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  orderId: '',
}

// creat order
export const createOrder = createAsyncThunk('order/createOrder', async (ordertDetails, thunkAPI) => {
    try {
      return await orderService.createOrder(ordertDetails)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
        state.orderId = ''
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(createOrder.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createOrder.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.message = action.payload.message
          state.orderId = action.payload.orderId
          toast.success(action.payload.message)
        })
        .addCase(createOrder.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          toast.error(action.payload);
        })
    },
  })
  
  export const { reset } = orderSlice.actions
  export default orderSlice.reducer