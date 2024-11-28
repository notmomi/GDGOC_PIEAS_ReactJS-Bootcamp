import React from "react";
import BookCard from "./BookCard";
import { Books } from "./book.js";

const BookDetails = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h2 style={{ color: "#333", fontSize: "28px", textAlign: "center", marginBottom: "20px" }}>
        Book Details
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {Books.map(book => (
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

export default BookDetails;
