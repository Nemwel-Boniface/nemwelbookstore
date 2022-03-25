import React from 'react';

const AddBook = () => (
  <div className="addnewbook">
    <h2>ADD NEW BOOK</h2>
    <form className="form">
      <input type="text" placeholder="Book title" required />

      <select name="books" id="bookgenre">
        <option value="Action">Action</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Historical">Historical</option>
        <option value="Romance">Romance</option>
        <option value="Kids">Kids</option>
      </select>
      <button type="submit" className="bookbtn">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
