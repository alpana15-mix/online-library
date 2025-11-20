// src/pages/AddBook.jsx
// A simple form that lets user add a new book.
// After adding, redirect to Browse page.

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  // Validation error message
  const [error, setError] = useState("");

  // Function runs when user submits form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !author || !category || !description || !rating) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    // Create new book object
    const newBook = {
      id: Date.now(), // unique id
      title,
      author,
      category: category.toLowerCase(),
      description,
      rating: Number(rating),
    };

    // Add new book to Redux
    dispatch(addBook(newBook));

    // After adding, redirect to browse page
    navigate("/browse");
  };

  return (
    <div>
      <h1>Add a New Book</h1>

      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "320px", gap: "10px" }}>
        
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category (e.g. fiction)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          placeholder="Short Description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input
          type="number"
          placeholder="Rating (0–5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button
          type="submit"
          style={{
            padding: "8px",
            background: "#0f172a",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}