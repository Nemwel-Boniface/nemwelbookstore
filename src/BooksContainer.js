import React, { Component } from 'react';

import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';

class BooksContainer extends Component {
  state = {
    myBooks: [
      {
        id: 1,
        genre: 'Action',
        bkTitle: 'Book Title',
        bkAuthor: 'Book Author',
        comments: 'Comments',
        remove: 'Remove',
        edit: "Edit",
        currentChapter: 'Current chapter',
        chapter: 'Chapter 21',
        updateProgress: 'UPDATE PRGRESS'
      },
    ]
   };
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Books myBooks={this.state.myBooks}/>
      </div>
    );
  }
}

export default BooksContainer;
