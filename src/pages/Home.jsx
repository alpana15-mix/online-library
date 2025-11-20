// src/pages/Home.jsx
// Home page shows categories + popular books.
// Simple English comments added for clarity.

import React from "react";
import { Link } from "react-router-dom";
import { booksData } from "../data/books";

export default function Home() {
  // Showing only first 3 books as "Popular"
  const popularBooks = booksData.slice(0, 3);

  const categories = [
    { name: "Fiction", slug: "fiction" },
    { name: "Non-Fiction", slug: "non-fiction" },
    { name: "Sci-Fi", slug: "sci-fi" },
    { name: "History", slug: "history" },
  ];

  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      <p style={{ marginBottom: "1rem" }}>
        Browse different categories, view details, or add your own book.
      </p>

      {/* Categories section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Book Categories</h2>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/books/${cat.slug}`}
              style={{
                background: "#e2e8f0",
                padding: "8px 12px",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#0f172a",
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular books section */}
      <section>
        <h2>Popular Books</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {popularBooks.map((book) => (
            <div
              key={book.id}
              style={{
                width: "220px",
                border: "1px solid #cbd5e1",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ marginBottom: "4px" }}>{book.title}</h3>
              <p style={{ margin: 0 }}>
                <small>by {book.author}</small>
              </p>

              <Link
                to={`/book/${book.id}`}
                style={{
                  marginTop: "8px",
                  display: "inline-block",
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
