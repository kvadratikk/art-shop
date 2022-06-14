import { SyntheticEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/Store';
import AppSlice from '../../store/reducers/AppSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { setPerPage, setSort, setPage, addCards, setIsNotFound } = AppSlice.actions;

  const perpage = useSelector((state: RootState) => state.perpage);
  const sort = useSelector((state: RootState) => state.sort);

  const handleChange = (e: SyntheticEvent) => {
    const count = +(e.target as HTMLInputElement).value || 1;
    dispatch(setPerPage(count));
  };

  const changeSort = (e: SyntheticEvent) => {
    const sort = (e.target as HTMLInputElement).value;
    dispatch(setSort(sort));
  };

  const submitSort = () => {
    dispatch(setPage({ current: 1, all: 0 }));
    dispatch(addCards([]));
    dispatch(setIsNotFound(false));
  };

  return (
    <div className="filter">
      <div className="filter__properties">
        <label className="filter__quantity">
          <span>Quantity per page:</span>
          <input type="number" min="1" max="50" defaultValue={perpage} onChange={handleChange} />
        </label>
        <div className="filter__sort" onChange={changeSort}>
          <span>Sort:</span>
          <label>
            <span>By date descending</span>
            <input
              type="radio"
              value="date-posted-desc"
              name="sort"
              defaultChecked={sort === 'date-posted-desc'}
            />
          </label>
          <label>
            <span>By date ascending</span>
            <input
              type="radio"
              value="date-posted-asc"
              name="sort"
              defaultChecked={sort === 'date-posted-asc'}
            />
          </label>
          <label>
            <span>By relevance</span>
            <input
              type="radio"
              value="relevance"
              name="sort"
              defaultChecked={sort === 'relevance'}
            />
          </label>
        </div>
      </div>

      <button className="filter__submit" onClick={submitSort}>
        Search
      </button>
    </div>
  );
};

export default Filter;
