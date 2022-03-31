import React from 'react';
import { useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import AddBook from './AddBook';
import Book from './Book';

function Books(props) {
  // const { myBooks } = props;
  const books = useSelector( state => state.booksReducer);
  if( books !== []) {
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
  return (<h2>Please add a book</h2>);
}

Books.propTypes = {
  myBooks: Proptypes.arrayOf(
    Proptypes.shape({}),
  ).isRequired,
};

export default Books;
