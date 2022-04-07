// import axios from 'axios';
import * as actions from './actionTypes';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jpzpwwUdhjgaVhh6l7RE/books/';

const bkArray = [];

const booksReducer = (state = bkArray, action) => {
  switch (action.type) {
    case actions.ADDBOOK:
      return [
        ...state, action.payLoad,
      ];
    case actions.REMOVEBOOK:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];
    case actions.GETBOOK:
      return [
        ...action.payLoad,
      ];
    default:
      return state;
  }
};

export const addNewBook = (book) => (dispatch) => fetch(
  baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(book),
  },
)
  .then((response) => {
    if (response.ok) {
      dispatch({
        type: actions.ADDBOOK,
        payLoad: book,
      });
    }
  });

export const getBookFromAPI = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json()).then((data) => {
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch({ type: actions.GETBOOK, payLoad: books });
  }).catch(() => {});

export const removeBook = (bookID) => async (dispatch) => {
  const body = {
    item_id: bookID,
  };
  return fetch(
    `${baseURL}${bookID}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    },
  )
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: actions.REMOVEBOOK,
          id: bookID,
        });
      }
    }).catch(() => {});
};

export default booksReducer;
