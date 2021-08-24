import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchMails = createAsyncThunk("mailsList/fetchMails", async () => {
    return await axios.get("http://localhost:5000/mails").then(response => {
        return response.data;
    })
})

export const fetchSingleMail = createAsyncThunk("mailsList/fetchSingleMail", async (id) => {
    return await axios.get(`http://localhost:5000/mails/${id}`).then(response => {
        return response.data;
    })
})

const mailsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.stamp - a.stamp
});

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
            mailsAdapter.upsertMany(state, action.payload);
            state.status = "success";
        },
        [fetchSingleMail.fulfilled]: (state, action) => {
            mailsAdapter.upsertOne(state, action.payload);
        }
    }
})

export default mailsSlice.reducer;