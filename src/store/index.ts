export const test = 1;
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';
export const store = configureStore({
  reducer: {
    home: homeReducer
  }
});
