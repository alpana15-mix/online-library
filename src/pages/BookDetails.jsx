import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const bookId = Number(id);

  const books = useSelector((state) => state.books.list);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div>
        <h2>Book Not Found</h2>
        <p>No book exists with ID: {id}</p>
        <Link to="/browse">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #cbd5e1",
        padding: "15px",
        borderRadius: "8px",
        background: "white",
        maxWidth: "600px",
      }}
    >
      <h1>{book.title}</h1>

      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Category:</strong> {book.category}
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {book.rating}
      </p>

      <p style={{ marginTop: "1rem" }}>
        <strong>Description:</strong> {book.description}
      </p>

      <Link
        to="/browse"
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "8px 12px",
          background: "#e2e8f0",
          borderRadius: "5px",
          textDecoration: "none",
          color: "#0f172a",
        }}
      >
        ← Back to Browse
      </Link>
    </div>
  );
}
