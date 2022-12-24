import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { baseUrl } from "../../app/assets/App Data/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchmenuItems = createAsyncThunk(
    'menuItems/fetchMenuItems',
    async () => {
        const response = await fetch(baseUrl + 'menuitems');
        if (!response.ok) {
            return Promise.reject('unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    menuItemsArray: [],
    isLoading: true,
    errMsg: '',
};

const menuItemsSlice = createSlice({
    name: 'menuItems',
    initialState,
    extraReducers: {
        [fetchmenuItems.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchmenuItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.menuItemsArray = mapImageURL(action.payload);
        },
        [fetchmenuItems.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const menuItemsReducer = menuItemsSlice.reducer;

export const selectAllMenuItems = (state) => {
    return state.menuItems.menuItemsArray;
};