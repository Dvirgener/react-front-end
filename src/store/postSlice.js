import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: 'post',
    initialState:{},
    reducers: {
        allPosts(state, payload){
            
        }
    }
});

export const postActions = postSlice.actions;

export default postSlice;