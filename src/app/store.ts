import { configureStore } from '@reduxjs/toolkit';
import contactSlice from '../features/contactSlice';
import filterSlice from '../features/filterSclice';
export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filters: filterSlice,
  },
});
