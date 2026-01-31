import { configureStore } from "@reduxjs/toolkit";
import postSlice from './postSlice';
import formSlice from "./form-slice";

const store = configureStore({
    reducer: {
        'post': postSlice.reducer,
        'formVisible': formSlice.reducer
    }
});

export default store;