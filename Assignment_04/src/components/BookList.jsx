import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';
import BookCard from './BookCard';

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <div className="book-list">
      <h2>All Books</h2>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          genre={book.genre}
        />
      ))}
    </div>
  );
};

export default BookList;
