import { MONTHLYEVENTS } from "../../app/assets/App Data/MONTHLYEVENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monthlyEventsArray: MONTHLYEVENTS
};

const monthlyEventsSlice = createSlice({
    name: 'monthlyEvents',
    initialState
});

export const monthlyEventsReducer = monthlyEventsSlice.reducer;


export const selectAllMonthlyEvents = (state) => {
    return state.monthlyEvents.monthlyEventsArray;
};