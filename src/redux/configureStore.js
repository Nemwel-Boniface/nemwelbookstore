import { combineReducers, createStore } from "redux";
import booksReducer from "./books/books";
import categoriesReducer from "./categories/categories";

const mainReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(mainReducer);

export default store;