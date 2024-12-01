import React, { createContext, useState, useEffect } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/books.json');
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, borrowedBooks, favBooks, setBorrowedBooks, setFavBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
