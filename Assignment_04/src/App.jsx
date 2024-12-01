import React from 'react';
import { BooksProvider } from './context/BooksContext';
import BookList from './components/BookList';
import BorrowedBooks from './components/BorrowedBooks';
import FavBooks from './components/FavBooks';


function App() {
  return (
    
    <BooksProvider>
      <h1>Library Manager</h1>
      <BookList />
      <BorrowedBooks />
      <FavBooks />
    </BooksProvider>
  );
}

export default App;
