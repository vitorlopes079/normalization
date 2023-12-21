import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const data = await response.json();
    return data;
  }
);

export const deleteComment = createAsyncThunk(
  'comments/deleteComment', async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: 'DELETE',
    })
    return id
  }
)

const commentsAdapter = createEntityAdapter({
  selectId: (comment) => comment.id,
});

const initialState = commentsAdapter.getInitialState({
  loading: false,
  error: null,
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      commentsAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.loading = false;
      commentsAdapter.removeOne(state, action.payload)
    });
  },
});

export default commentsSlice.reducer;
export const {
  selectAll: selectAllComments,
  selectById: selectCommentById,
  selectIds: selectCommentIds,
} = commentsAdapter.getSelectors((state) => state.comments);