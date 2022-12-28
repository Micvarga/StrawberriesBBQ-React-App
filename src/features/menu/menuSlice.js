import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase.config";
import { collection, getDocs } from 'firebase/firestore';
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchmenuItems = createAsyncThunk(
    'menuItems/fetchMenuItems',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'menuItems'));
        const menuItems = [];
        querySnapshot.forEach((doc) => {
            menuItems.push(doc.data());
        });
        return menuItems;
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