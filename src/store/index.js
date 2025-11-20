// src/store/index.js
// This file creates a Redux store for managing the books list.

import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
