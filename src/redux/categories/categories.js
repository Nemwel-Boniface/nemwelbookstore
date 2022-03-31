const CHECKSTATUS = 'checkStatus';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return [...state, 'Under construction'];
    default:
      return state;
  }
};

export const checkStatus = (book) => ({
  type: CHECKSTATUS,
  book,
});

export default categoriesReducer;
