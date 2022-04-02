import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.floor(Math.random() * 21),
      author,
      title,
      genre: document.getElementById('bookgenre').value,
    };
    dispatch(addNewBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="addnewbook">
      <h2>ADD NEW BOOK</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input name="author" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <select name="books" id="bookgenre" defaultValue="Categories">
          <option value="Categories" selected>Categories</option>
          <option value="redpill">Red pill</option>
          <option value="Business">Business</option>
          <option value="nutrition">Nutrition</option>
          <option value="Historical">Historical</option>
          <option value="Kids">Kids</option>
        </select>
        <button type="submit" className="bookbtn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
