import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'counter',
  initialState: {
    sendMessageIsOpen: false
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    }
  },
  extraReducers: {
    
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMailIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
