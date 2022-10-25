import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListPost } from "core/services/post.service";

export const fetchPosts = createAsyncThunk("", async () => {
    const response = await getListPost();
    return response.data;
});

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        posts: [],
        status: "",
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = state.posts.concat(action.payload);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
