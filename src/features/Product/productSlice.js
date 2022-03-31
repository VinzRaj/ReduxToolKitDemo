import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getproductsApiCall } from './productApi';

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getproductsApiCall();
    return response;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isSucess: false,
    isLoading: false,
    message: '',
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.products = action.payload;
      state.isSucess = true;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
      state.isSucess = false;
    },
  },
});
export default productSlice.reducer;
