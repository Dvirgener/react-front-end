import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const allPostAsync = createAsyncThunk(
    "posts/allPostsAsync", 
    async (_, thunkAPI) => {
        try {
        const res = await fetch("http://my-react-backend-api.test/api/v1/posts");
        const data = await res.json();
        return data.posts; // return the array
        } catch (err) {
        return thunkAPI.rejectWithValue("Failed to fetch posts");
        }
    }
    
)

export const addPostAsync = createAsyncThunk(
    "posts/addOnePostAsync", async(post, thunkAPI) => {
        try{
            const res = await fetch("http://my-react-backend-api.test/api/v1/posts",{
                method: "POST",
                headers: { "Content-Type": "application/json", "accept" : "application/json" },
                body: JSON.stringify(post),
            });
            return await res.json();

        }catch(err){
                    return thunkAPI.rejectWithValue("Failed to Save Post");
        }
    }
)


const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
    builder
      .addCase(allPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(allPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(addPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
        .addCase(addPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload);
      })
  },
});


export const postActions = postSlice.actions;

export default postSlice;