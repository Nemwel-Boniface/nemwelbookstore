import * as actions from './actionTypes';
// const uniqueID = 'jpzpwwUdhjgaVhh6l7RE';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jpzpwwUdhjgaVhh6l7RE/books/`;

const bkArray = [];

const booksReducer = (state = bkArray, action) => {
  switch (action.type) {
    case actions.ADDBOOK:
      return [
        ...state, action.payLoad,
      ];
    case actions.REMOVEBOOK:
      return [...state.filter((bk) => bk.id !== action.payLoad.id)];
    default:
      return state;
  }
};

export const addNewBook = (book) => (dispatch) => fetch (
  baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(book),
  })
    .then((response) => {
      if(response.ok) {
        dispatch({
          type: actions.ADDBOOK,
          payLoad: book,
        })
      }
    });


export const removeBook = (id) => ({
  type: actions.REMOVEBOOK,
  payLoad: {
    id,
  },
});

export default booksReducer;
