import React from 'react';
import Proptypes from 'prop-types';

function Book(props) {
  const { book } = props;
  const {
    genre, bkTitle, bkAuthor,
    comments, remove, edit, currentChapter,
    chapter, updateProgress,
  } = book;
  return (
    <div className="book">
      <div className="bookLeft">
        <h3 className="genre blur">{genre}</h3>
        <h2 className="bookTitle">{bkTitle}</h2>
        <h3 className="bookAuthor">{bkAuthor}</h3>
        <ul>
          <li className="bar">
            <button type="button">{comments}</button>
          </li>
          <li className="bar">
            <button type="button">{remove}</button>
          </li>
          <li>
            <button type='button'>{edit}</button>
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
        <h3 className="currentchapter blur">{currentChapter}</h3>
        <h3 className="chapter">{chapter}</h3>
        <button type="button" className="bookbtn">{updateProgress}</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.shape({
    genre: Proptypes.string.isRequired,
    comments: Proptypes.string.isRequired,
    bkAuthor: Proptypes.string.isRequired,
    remove: Proptypes.string.isRequired,
    edit: Proptypes.string.isRequired,
    currentChapter: Proptypes.string.isRequired,
    chapter: Proptypes.string.isRequired,
    updateProgress: Proptypes.string.isRequired,
    bkTitle: Proptypes.string.isRequired,
  }).isRequired,
};
export default Book;
