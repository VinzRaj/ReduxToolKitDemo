import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isSucess: false,
    isLoading: false,
    message: '',
  },
  extraReducers: () => {},
});
export default productSlice.reducer;
