import { MENUITEMS } from "../../app/assets/App Data/MENUITEMS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuItemsArray: MENUITEMS
};

const menuItemsSlice = createSlice({
    name: 'menuItems',
    initialState
});

export const menuItemsReducer = menuItemsSlice.reducer;

export const selectAllMenuItems = (state) => {
    return state.menuItems.menuItemsArray;
};