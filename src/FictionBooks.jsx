import React from "react";
import BookCard from "./BookCard";
import { Books } from "./book.js";

const FictionBooks = () => {
  const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction");

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ color: "#333", fontSize: "28px", textAlign: "center", marginBottom: "20px" }}>
        Fiction Books
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {fictionBooks.map(book => (
          <BookCard 
            key={book.id} 
            {...book} 
            style={{
              border: "1px solid #ddd", 
              borderRadius: "8px", 
              width: "220px", 
              backgroundColor: "#fff", 
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
              padding: "10px",
              textAlign: "center"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FictionBooks;
