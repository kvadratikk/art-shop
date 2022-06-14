import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './reducers/AppSlice';

export const setupStore = () => {
  return configureStore({
    reducer: AppSlice.reducer,
  });
};
