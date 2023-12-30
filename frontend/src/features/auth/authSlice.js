import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import toast from 'react-hot-toast';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register user
export const register = createAsyncThunk('auth/addToCart', async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
        toast.loading('Please wait...')
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload.userId
        toast.dismiss()
        toast.success('You registered successfully!...')
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        toast.dismiss()
        toast.error('Registration was unsuccessful!...')
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
        toast.loading('Please wait...')
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload.userId
        toast.dismiss()
        toast.success('Login success!...')
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        toast.dismiss()
        toast.error('Login was unsuccessful!...')
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        toast.dismiss()
        toast.success('Logged out!...')
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer