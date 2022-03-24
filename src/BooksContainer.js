import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: [
        {
          id: 1,
          genre: 'Action',
          bkTitle: 'Book Title',
          bkAuthor: 'Book Author',
          comments: 'Comments',
          remove: 'Remove',
          edit: 'Edit',
          currentChapter: 'Current chapter',
          chapter: 'Chapter 21',
          updateProgress: 'UPDATE PRGRESS',
        },
      ],
    };
  }

  render() {
    const { myBooks } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Books myBooks={myBooks} />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </div>
    );
  }
}

export default BooksContainer;
