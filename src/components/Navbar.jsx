import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Hide navbar on 404 page
  if (location.pathname === "/404-not-found") {
    return null;
  }

  const navStyle = {
    padding: "10px 20px",
    background: "#0f172a",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    padding: "6px 8px",
    borderRadius: "4px",
  };

  // simple hover effects
  const hoverIn = (e) => (e.target.style.background = "#1e293b");
  const hoverOut = (e) => (e.target.style.background = "transparent");

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>Online Library</h2>

      <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Home
        </Link>

        <Link
          to="/browse"
          style={linkStyle}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Browse Books
        </Link>

        <Link
          to="/add"
          style={linkStyle}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          Add Book
        </Link>
      </div>
    </nav>
  );
}
