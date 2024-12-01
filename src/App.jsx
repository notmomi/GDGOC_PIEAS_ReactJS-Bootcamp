import React from "react";
import HighRatedBooks from "./HighRatedBooks";
import BookDetails from "./BookDetails";
import FictionBooks from "./FictionBooks";
import BookAuthors from "./BookAuthors";
import "./styles.css"
const App = () => {
  return (
    <div classname="container">
      <h1 style={{ 
        textAlign: "center", 
        color: "teal", 
        fontSize: "2.5rem", 
        marginBottom: "20px" }}>
        Library Manager</h1>
      <HighRatedBooks />
      <BookDetails />
      <FictionBooks />
      <BookAuthors />
    </div>
  );
};
export default App;