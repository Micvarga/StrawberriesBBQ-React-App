import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { menuItemsReducer } from '../features/menu/menuSlice';
import { monthlyEventsReducer } from '../features/events/eventsSlice';

export const store = configureStore({
  reducer: {
    menuItems: menuItemsReducer,
    monthlyEvents: monthlyEventsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])

});
