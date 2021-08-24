import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchMails = createAsyncThunk("mailsList/fetchMails", async () => {
    return await axios.get("http://localhost:5000/mails").then(response => {
        return response.data;
    })
})

const mailsAdapter = createEntityAdapter();

export const {
    selectAll: selectAllMails,
    selectIds: selectAllMailsIds,
    selectById: selectMailById
} = mailsAdapter.getSelectors(state => state.mailsList);

const initialState = mailsAdapter.getInitialState({
    status: "idle",
    error: null
});

const mailsSlice = createSlice({
    name: "mailsList",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMails.pending]: (state) => {
            state.status = "loading";
        },
        [fetchMails.fulfilled]: (state, action) => {
            state.status = "success";
            mailsAdapter.updateMany(state, action.payload);
        }
    }
})

export default mailsSlice.reducer;