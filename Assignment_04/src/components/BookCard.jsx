import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const BookCard = ({ title, author, rating, genre }) => {
  const { borrowedBooks, favBooks, setBorrowedBooks, setFavBooks } = useContext(BooksContext);

  const addBorrowedBook = () => {
    if (!borrowedBooks.includes(title)) {
      setBorrowedBooks([...borrowedBooks, title]);
    }
  };

  const addFavBook = () => {
    if (!favBooks.includes(title)) {
      setFavBooks([...favBooks, title]);
    }
  };

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
      <button onClick={addBorrowedBook}>Add Me</button>
      <button onClick={addFavBook}>Favorite</button>
    </div>
  );
};

export default BookCard;
