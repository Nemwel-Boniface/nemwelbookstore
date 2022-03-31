import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.categoriesReducer);
  return (
    <div className="categories">
      <button type="button" className="bookbtn" onClick={() => dispatch(checkStatus())}>Check status</button>
      {currentStatus}
    </div>
  );
}

export default Categories;
