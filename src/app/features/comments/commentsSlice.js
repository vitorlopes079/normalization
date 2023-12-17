import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    ).then((resp) => resp.json());
  }
);

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default commentsSlice.reducer;
export const selectComments = state => state.comments.comments;
export const selectCommentsLoading = state => state.comments.loading;
export const selectCommentsError = state => state.comments.error;