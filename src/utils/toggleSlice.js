import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name : "toggle",

    initialState : {
        isOpen : false,
        isLocationOpen : false,
    },

    reducers : {
        toggleMenu : (state) =>{
            state.isOpen = !state.isOpen;
        },
        toggleLocation : (state) =>{
            state.isLocationOpen = !state.isLocationOpen;
        }
    }
});

export default toggleSlice.reducer;
export const {toggleMenu,toggleLocation} = toggleSlice.actions;