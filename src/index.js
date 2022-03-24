import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './stylesheets/Navbar.css';
import './stylesheets/Books.css';
import './stylesheets/AddBook.css'
import BooksContainer from './BooksContainer';

ReactDOM.render(
  <React.StrictMode>
    <BooksContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
