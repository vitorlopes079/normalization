import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from "./features/comments/commentsSlice"

export const store = configureStore({
    reducer: {
      comments: commentsReducer,
    },
  });