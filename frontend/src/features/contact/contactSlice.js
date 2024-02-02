import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contactService from './contactService';
import toast from 'react-hot-toast';

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createContact =  createAsyncThunk('contact/createContact', async (contactDetails, thunkAPI) => {
    try {
        return await contactService.createContact(contactDetails)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const contactSlice = createSlice({
    name: 'contact',
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
            .addCase(createContact.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
                toast.success(action.payload.message)
            })
            .addCase(createContact.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                toast.error(action.payload);
            })
    },
})

export const { reset } = contactSlice.actions
export default contactSlice.reducer