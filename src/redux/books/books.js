import * as actions from './actionTypes';

const bkArray = [];

const booksReducer = (state = bkArray, action) => {
  switch (action.type) {
    case actions.ADDBOOK:
      return [
        ...state,
        {
          id: bkArray.length,
          bookAUthor: action.payLoad.bkAUthor,
          bookCategory: action.payLoad.bkCategory,
        },
      ];
    case actions.REMOVEBOOK:
      return state.filter((bk) => bk.id !== action.payLoad.id);
    default:
      return state;
  }
};

export const addNewBook = ({ bkAUthor, bkCategory }) => ({
  type: actions.ADDBOOK,
  payLoad: {
    id: bkArray.length,
    bkAUthor,
    bkCategory,
  },
});

export const removeBook = (id) => ({
  type: actions.REMOVEBOOK,
  payLoad: {
    id,
  },
});

export default booksReducer;
