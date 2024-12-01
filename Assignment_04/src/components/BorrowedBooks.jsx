import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const BorrowedBooks = () => {
  const { borrowedBooks } = useContext(BooksContext);

  return (
    <div className="borrowed-books">
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
