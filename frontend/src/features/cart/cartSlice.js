import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './cartService'
import toast from 'react-hot-toast';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  cart: [],
}

// Add to cart
export const addToCart = createAsyncThunk('cart/addToCart', async (cartProductDetails, thunkAPI) => {
    try {
      return await cartService.addToCart(cartProductDetails)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  }
)

// View cart
export const viewCart = createAsyncThunk('cart/viewCart', async (thunkAPI) => {
    try {
      return await cartService.viewCart()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete from cart
export const deleteFromCart = createAsyncThunk('cart/deleteFromCart', async (cartDeleteData, thunkAPI) => {
    try {
      return await cartService.deleteFromCart(cartDeleteData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  }
)


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
      state.cart = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true
        toast.loading('Please wait...')
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload.message
        toast.dismiss()
        toast.success(action.payload.message)
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.dismiss()
        toast.error(action.payload);
      })
      .addCase(viewCart.pending, (state) => {
        state.isLoading = true
        toast.loading('Please wait...')
      })
      .addCase(viewCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.cart = action.payload.cartProducts;
        toast.dismiss();
      })
      .addCase(viewCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.dismiss();
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.isLoading = true
        toast.loading('Please wait...')
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cart = state.cart.filter(item => item.productId !== action.payload.productId);
        toast.dismiss()
        toast.success(action.payload.message)
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.dismiss()
        toast.error(action.payload);
      })
  },
})

export const { reset } = cartSlice.actions
export default cartSlice.reducer