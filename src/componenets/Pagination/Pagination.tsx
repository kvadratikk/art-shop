import { SyntheticEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/Store';
import AppSlice from '../../store/reducers/AppSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { addCards, setPage } = AppSlice.actions;

  const pages = useSelector((state: RootState) => state.pages);

  const handleClick = (e: SyntheticEvent) => {
    const page = +(e.target as HTMLInputElement).value;

    dispatch(setPage({ ...pages, current: page }));
    dispatch(addCards([]));
  };

  return (
    <div className="pagination">
      {new Array(pages.all).fill('value').map((page, idx) => (
        <input
          type="button"
          onClick={handleClick}
          className={idx + 1 === pages.current ? 'active' : undefined}
          key={idx}
          value={idx + 1}
        />
      ))}
    </div>
  );
};

export default Pagination;
