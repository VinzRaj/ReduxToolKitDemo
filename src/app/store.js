import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Product/productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
