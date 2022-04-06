import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import { getBookFromAPI } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookFromAPI());
  }, []);
  return (
    <div className="books">
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <AddBook />
      </ul>
    </div>
  );
}

export default Books;
