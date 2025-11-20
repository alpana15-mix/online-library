import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />

          {/* 404 route */}
          <Route path="/404-not-found" element={<NotFound />} />

          {/* Catch-all → redirect to custom 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}