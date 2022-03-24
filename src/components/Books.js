import React, { Component } from 'react';
import Proptypes from 'prop-types';
import AddBook from './AddBook';
import Book from './Book';

class Books extends Component {
  render() {
    const { myBooks } = this.props;
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
}

Books.propTypes = {
  myBooks: Proptypes.arrayOf(
    Proptypes.shape({}),
  ).isRequired,
};

export default Books;
