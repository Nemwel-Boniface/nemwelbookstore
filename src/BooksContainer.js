import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route exact path='/' element={<Books myBooks={this.state.myBooks}/>} />
          {/* <Route exact path='/categories' element={} /> */}
        </Routes>
      </div>
    );
  }
}

export default BooksContainer;
