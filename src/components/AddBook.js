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
      item_id: Math.floor(Math.random() * 51),
      author,
      title,
      category: document.getElementById('bookgenre').value,
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

        <select name="books" id="bookgenre">
          <option value="Categories">Categories</option>
          <option value="Red pill">Red pill</option>
          <option value="Education">Education</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Historical">Historical</option>
          <option value="Kids">Kids</option>
          <option value="Thriller">Thriller</option>
        </select>
        <button type="submit" className="bookbtn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
