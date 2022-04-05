import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="books">
      <ul>
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
        <AddBook />
      </ul>
    </div>
  );
}

export default Books;
