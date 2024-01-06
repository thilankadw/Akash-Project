import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'
import toast from 'react-hot-toast';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  products: [],
  productDetails: [],
}

export const allProducts = createAsyncThunk('product/allProducts', async (thunkAPI) => {
    try {
      return await productService.allProducts()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  }
)

export const productdetails = createAsyncThunk('product/productdetails', async (productId, thunkAPI) => {
    try {
      return await productService.productdetails(productId)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
      state.products = []
      state.productDetails = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload.message
        state.products = action.payload.productDetails
      })
      .addCase(allProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.error(action.payload)
      })
      .addCase(productdetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(productdetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload.message
        state.productDetails = action.payload.productDetails
      })
      .addCase(productdetails.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.error(action.payload)
      })
  },
})

export const { reset } = productSlice.actions
export default productSlice.reducer