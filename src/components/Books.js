import React, { Component } from 'react';
import AddBook from './AddBook';
import Book from './Book';

class Books extends Component {
  render() {
    return (
      <div className='books'>
      <ul>
        {this.props.myBooks.map(book => (
          <Book key={book.id} book={book} />
        ))}
        <AddBook />
      </ul>
      </div>
    )
  }
}

export default Books;