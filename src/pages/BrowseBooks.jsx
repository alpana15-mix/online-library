import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);

  const [searchText, setSearchText] = useState("");

  // Step 1: category filter
  let filteredBooks = books;
  if (category) {
    filteredBooks = filteredBooks.filter(
      (b) => b.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Step 2: search filter
  if (searchText.trim() !== "") {
    filteredBooks = filteredBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(searchText.toLowerCase()) ||
        b.author.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div>
      <h1>Browse Books</h1>

      {category && (
        <p>
          Showing category: <strong>{category}</strong>
        </p>
      )}

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "1rem",
          border: "1px solid #cbd5e1",
          borderRadius: "5px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              style={{
                width: "220px",
                border: "1px solid #e2e8f0",
                background: "white",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "4px" }}>{book.title}</h3>
              <p style={{ marginBottom: "4px" }}>
                <small>by {book.author}</small>
              </p>

              <p style={{ marginBottom: "6px", fontSize: "13px" }}>
                Category: {book.category}
              </p>

              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}