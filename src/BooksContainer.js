import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

const BooksContainer = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default BooksContainer;
