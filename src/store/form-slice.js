import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name: 'toggle-form',
    initialState:{'isVisible': true},
    reducers: {
        toggleForm(state){
            state.isVisible = !state.isVisible;
        }
    }
});

export const formActions = formSlice.actions;

export default formSlice; 