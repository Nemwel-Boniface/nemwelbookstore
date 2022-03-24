import React, { Component } from 'react'
<div className='individualbook'>

</div>;
class Book extends Component {
  state = {  }
  render() {
    return (
      <div className='book'>
        <div className='bookLeft'>
          <h3 className='genre'>{this.props.book.genre}</h3>
          <h2 className='bookTitle'>{this.props.book.bkTitle}</h2>
          <h3 className='bookAuthor'>{this.props.book.bkAuthor}</h3>
          <ul>
            <li className='bar'><a href='$'>{this.props.book.comments}</a></li>
            <li className='bar'><a href='$'>{this.props.book.remove}</a></li>
            <li><a href='$'>{this.props.book.edit}</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Book;