import { configureStore } from '@reduxjs/toolkit';
import { menuItemsReducer } from '../features/menu/menuSlice';
import { monthlyEventsReducer } from '../features/events/eventsSlice';

export const store = configureStore({
  reducer: {
    menuItems: menuItemsReducer,
    monthlyEvents: monthlyEventsReducer
  },
});
