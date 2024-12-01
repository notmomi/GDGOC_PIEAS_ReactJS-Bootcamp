import React from "react";
import { Books } from "./book.js";
const BookAuthors = () => {
  const authors = [...new Set(Books.map(book => book.author))];
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>Book Authors</h2>
      <ul className="authors-list" style={{ listStyleType: "none", padding: "0" }}>
        {authors.map((author, index) => (
          <li key={index} 
          style={{
            fontSize: "18px", 
            marginBottom: "10px", 
            color: "#555", 
            padding: "5px", 
            borderRadius: "5px", 
            backgroundColor: "#f0f0f0"
          }}>{author}</li>
        ))}
      </ul>
    </div>
  );
};
export default BookAuthors;