import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import parse from 'html-react-parser';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/Store';
import AppSlice from '../../../store/reducers/AppSlice';

import './style.css';

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCurrentCard } = AppSlice.actions;

  const currentCard = useSelector((state: RootState) => state.currentCard);
  const [isImgLoad, setIsImgLoad] = useState(false);

  useEffect(() => {
    if (!currentCard?.id) navigate('/');

    return () => {
      dispatch(setCurrentCard(null));
    };
  }, [dispatch, navigate, currentCard?.id, setCurrentCard]);

  return (
    <section className={isImgLoad ? 'details show' : 'details'}>
      <div className="container">
        <h2 className="details__title title">{currentCard?.title || 'Untitled'}</h2>
        <img
          data-testid="details-img"
          className="details__img"
          src={currentCard?.url_o || currentCard?.url_m}
          alt="product-original"
          onLoad={() => {
            setIsImgLoad(true);
          }}
        />
        <p className="details__description">{parse(String(currentCard?.description._content))}</p>
        <p className="details__tags">{currentCard?.tags.split(' ').map((tag) => `#${tag} `)}</p>
      </div>
    </section>
  );
};

export default Details;
