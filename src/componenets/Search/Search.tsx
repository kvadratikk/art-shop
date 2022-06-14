import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/Store';
import AppSlice from '../../store/reducers/AppSlice';

import './style.css';

const Search = () => {
  const dispatch = useDispatch();
  const { setSearchValue } = AppSlice.actions;

  const searchValue = useSelector((state: RootState) => state.searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
    localStorage.setItem('searchValue', e.target.value);
  };

  return (
    <form data-testid="form" onSubmit={(e) => e.preventDefault()}>
      <label className="search">
        <input
          value={searchValue}
          placeholder="Search"
          className="search__input"
          type="search"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Search;
