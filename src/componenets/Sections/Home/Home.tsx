import { useCallback, SyntheticEvent, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/Store';
import AppSlice from '../../../store/reducers/AppSlice';
import apiRequest from '../../../store/reducers/ActionCreators';
import { AppDispatch } from '../../../types/Store';

import './style.css';

import Search from '../../Search/Search';
import Cards from '../../Cards/Cards';
import Pagination from '../../Pagination/Pagination';
import Filter from '../../Filter/Filter';

const Home = () => {
  const dispatch = useDispatch();
  const { addCards, setIsNotFound, setPage, setIsLoad } = AppSlice.actions;

  const pages = useSelector((state: RootState) => state.pages);
  const sort = useSelector((state: RootState) => state.sort);
  const perpage = useSelector((state: RootState) => state.perpage);
  const cards = useSelector((state: RootState) => state.cards);
  const isNotFound = useSelector((state: RootState) => state.isNotFound);
  const isLoad = useSelector((state: RootState) => state.isLoad);

  const addApiCards = useCallback(
    async (event?: SyntheticEvent) => {
      const askApiRequest = async () => {
        (dispatch as AppDispatch)(apiRequest());
      };

      event?.preventDefault();

      if (event || !cards.length) {
        await askApiRequest();

        if (event) dispatch(setPage({ current: 1 }));
      } else {
        dispatch(addCards(cards));
        dispatch(setIsNotFound(false));
        dispatch(setIsLoad(true));
      }
    },
    [addCards, dispatch, cards, setIsNotFound, setPage, setIsLoad]
  );

  useEffect(() => {
    async function fetchAPI() {
      await addApiCards();
    }

    if (!isNotFound) fetchAPI();
  }, [pages, perpage, addApiCards, isNotFound, sort]);

  return (
    <section className="home">
      <div className="container">
        <h2 className="title">Our Products</h2>

        {!isLoad ? (
          <div className="spinner">
            <span>loading</span>
          </div>
        ) : isNotFound ? (
          <p className="not-found">Not Found</p>
        ) : (
          <>
            {pages.all > 1 ? <Pagination /> : null}
            <Cards cards={cards} />
          </>
        )}

        {isLoad && (cards.length || isNotFound) ? (
          <>
            <Search />
            <Filter />
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Home;
