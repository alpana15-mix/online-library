import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div style={{ paddingTop: "2rem" }}>
      <h1>404 - Page Not Found</h1>

      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>

      <Link
        to="/"
        style={{
          marginTop: "15px",
          display: "inline-block",
          padding: "8px 12px",
          background: "#e2e8f0",
          borderRadius: "5px",
        }}
      >
        Go to Home
      </Link>
    </div>
  );
}