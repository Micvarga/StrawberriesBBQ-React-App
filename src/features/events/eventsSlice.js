import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase.config";
import { collection, getDocs } from 'firebase/firestore';

export const fetchMonthlyEvents = createAsyncThunk(
    'monthlyEvents/fetchMonthlyEvents',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'monthlyEvents'));
        const monthlyEvents = [];
        querySnapshot.forEach((doc) => {
            monthlyEvents.push(doc.data());
        });
        return monthlyEvents;
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