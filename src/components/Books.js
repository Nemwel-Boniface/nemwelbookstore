import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
  render() {
    return (
      <div className='books'>
      <ul>
        {this.props.myBooks.map(book => (
          // <li key={book.id}>{book.title}</li>
          <Book key={book.id} book={book} />
        ))}
      </ul>
      </div>
    )
  }
}

export default Books;