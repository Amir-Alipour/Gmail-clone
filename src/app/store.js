import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import mailsListReducer from '../features/mailsListSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    mailsList: mailsListReducer
  },
});