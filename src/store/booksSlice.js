// src/store/booksSlice.js
// This slice will hold the books list.
// We will use dummy data as initial state but also allow adding new books.

import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "../data/books";

const booksSlice = createSlice({
  name: "books",

  // Start with dummy data
  initialState: {
    list: [...booksData],
  },

  reducers: {
    addBook: (state, action) => {
      // Adding new book at the top of the list
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
