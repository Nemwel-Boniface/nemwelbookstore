import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/index.css';
import './stylesheets/Navbar.css';
import './stylesheets/Books.css';
import './stylesheets/AddBook.css'
import './stylesheets/Categories.css'
import BooksContainer from './BooksContainer';

ReactDOM.render(
  <BrowserRouter>
    <BooksContainer />
  </BrowserRouter>,
  document.getElementById('root'),
);
