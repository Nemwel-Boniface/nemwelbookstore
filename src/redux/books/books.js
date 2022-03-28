import * as actions from './actionTypes';

let lastId = 0;

const booksReducer = (state = [], action) => {
  switch(action.type) {
    case actions.ADDBOOK:
      return [
        ...state,
        {
          id: ++lastId,
          bookAUthor: action.payLoad.bkAUthor,
          bookCategory: action.payLoad.bkCategory,
        },
      ];
    case actions.REMOVEBOOK:
      return state.filter(bk => bk.id !== action.payLoad.id);
    default:
      return state;
  }
}


export const addNewBook = ({ bkAUthor, bkCategory }) => ({
  type: actions.ADDBOOK,
  payLoad: {
    id: ++lastId,
    bkAUthor,
    bkCategory,
  }
})

export const removeBook = (id) => ({
  type: actions.REMOVEBOOK,
  payLoad: {
    id,
  }
})

export default booksReducer;