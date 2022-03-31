import * as actions from './actionTypes';

const bkArray = [];

const booksReducer = (state = bkArray, action) => {
  switch (action.type) {
    case actions.ADDBOOK:
      return [
        ...state, action.payLoad,
      ];
    case actions.REMOVEBOOK:
      return [ ...state.filter((bk) => bk.id !== action.payLoad.id) ];
    default:
      return state;
  }
};

export const addNewBook = (book) => ({
  type: actions.ADDBOOK,
  payLoad: book,
});

export const removeBook = (id) => ({
  type: actions.REMOVEBOOK,
  payLoad: {
    id,
  },
});

export default booksReducer;
