import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/assets/App Data/baseUrl";

export const fetchMonthlyEvents = createAsyncThunk(
    'monthlyEvents/fetchMonthlyEvents',
    async () => {
        const response = await fetch(baseUrl + 'monthlyEvents');
        if (!response.ok) {
            return Promise.reject('unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    monthlyEventsArray: [],
    isLoading: true,
    errMsg: '',
};


const monthlyEventsSlice = createSlice({
    name: 'monthlyEvents',
    initialState,
    extraReducers: {
        [fetchMonthlyEvents.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchMonthlyEvents.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.monthlyEventsArray = action.payload;
        },
        [fetchMonthlyEvents.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const monthlyEventsReducer = monthlyEventsSlice.reducer;


export const selectAllMonthlyEvents = (state) => {
    return state.monthlyEvents.monthlyEventsArray;
};