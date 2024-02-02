import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'
import toast from 'react-hot-toast';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  products: [],
  productDetails: [],
  nextPage: 2,
  previousPage: null,
  currentPage: 1,
  totalPages: null,
  totalProducts: null,
  type: 'all'
}

export const allProducts = createAsyncThunk('product/allProducts', async ({ currentPage, type }, thunkAPI) => {
    try {
      return await productService.allProducts(currentPage, type)
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
      state.nextPage = 2
      state.previousPage = null
      state.currentPage = 1
      state.totalPages = null
      state.totalProducts = null
      state.type = 'all'
    },
    setNextPage: (state, action) => {
      state.nextPage = action.payload
    },
    setPreviousPage: (state, action) => {
      state.previousPage = action.payload
    },  
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    }
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
        state.products = action.payload.productDetails.productsList
        if(action.payload.productDetails.next){
          state.nextPage = parseInt(action.payload.productDetails.next.page)
          state.currentPage = parseInt(action.payload.productDetails.next.page)-1
        }
        if(action.payload.productDetails.prev){
          state.previousPage = parseInt(action.payload.productDetails.prev.page)
        }
        state.totalPages = parseInt(action.payload.productDetails.totalPages)
        state.totalProducts = parseInt(action.payload.productDetails.totalProducts)
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

export const { reset, setNextPage, setPreviousPage, setCurrentPage, setType } = productSlice.actions
export default productSlice.reducer
