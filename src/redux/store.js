import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { userSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: userSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
