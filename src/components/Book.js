import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { book } = props;
  const {
    category, title, author,
  } = book;

  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="bookLeft">
        <h3 className="genre blur">{category}</h3>
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">{author}</h3>
        <ul>
          <li className="bar">
            <button type="button">Comments</button>
          </li>
          <li className="bar">
            <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>

      <div className="bookMiddle">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>

        <div className="percentages">
          <h2>75%</h2>
          <p className="blur">Completed</p>
        </div>
      </div>

      <div className="bookRight">
        <h3 className="currentchapter blur">Current chapter</h3>
        <h3 className="chapter">Chapter 6</h3>
        <button type="button" className="bookbtn">UPDATE PRGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.shape({
    category: Proptypes.string.isRequired,
    author: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    item_id: Proptypes.number.isRequired,
  }).isRequired,
};
export default Book;
