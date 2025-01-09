import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './slices/dragonSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
    auth: authReducer,
  },
});

export default store;
