import * as actions from './actionTypes';

let lastId = 0;

const reducer = (state = [], action) => {
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


const addNewBook = ({ bkAUthor, bkCategory }) => ({
  type: actions.ADDBOOK,
  payLoad: {
    id: ++lastId,
    bkAUthor,
    bkCategory,
  }
})

const removeBook = (id) => ({
  type: actions.REMOVEBOOK,
  payLoad: {
    id,
  }
})

export default reducer;