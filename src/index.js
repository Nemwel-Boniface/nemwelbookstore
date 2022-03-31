import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './stylesheets/index.css';
import './stylesheets/Navbar.css';
import './stylesheets/Books.css';
import './stylesheets/AddBook.css';
import './stylesheets/Categories.css';
import BooksContainer from './BooksContainer';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <BooksContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
