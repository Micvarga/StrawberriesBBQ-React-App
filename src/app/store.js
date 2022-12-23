import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { menuItemsReducer } from '../features/menu/menuSlice';

export const store = configureStore({
  reducer: {
    menuItems: menuItemsReducer
  },
});
