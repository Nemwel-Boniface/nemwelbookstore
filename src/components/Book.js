import React, { Component } from 'react'
<div className='individualbook'>

</div>;
class Book extends Component {
  state = {  }
  render() {
    return (
      <div className='book'>
        <div className='bookLeft'>
          <h3 className='genre blur'>{this.props.book.genre}</h3>
          <h2 className='bookTitle'>{this.props.book.bkTitle}</h2>
          <h3 className='bookAuthor'>{this.props.book.bkAuthor}</h3>
          <ul>
            <li className='bar'><a href='$'>{this.props.book.comments}</a></li>
            <li className='bar'><a href='$'>{this.props.book.remove}</a></li>
            <li><a href='$'>{this.props.book.edit}</a></li>
          </ul>
        </div>

        <div className='bookMiddle'>
        <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"></div>
        </div>
      </div>

      <div className='percentages'>
        <h2>75%</h2>
        <p className='blur'>Completed</p>
      </div>
        </div>

        <div className='bookRight'>
          <h3 className='currentchapter blur'>{this.props.book.currentChapter}</h3>
          <h3 className='chapter'>{this.props.book.chapter}</h3>
          <button>{this.props.book.updateProgress}</button>
        </div>
      </div>
    );
  }
}

export default Book;