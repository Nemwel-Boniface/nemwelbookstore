import React from 'react';
import Proptypes from 'prop-types';
import AddBook from './AddBook';
import Book from './Book';

function Books(props) {
  const { myBooks } = props;
  return (
    <div className="books">
      <ul>
        {myBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <AddBook />
      </ul>
    </div>
  );
}

Books.propTypes = {
  myBooks: Proptypes.arrayOf(
    Proptypes.shape({}),
  ).isRequired,
};

export default Books;
