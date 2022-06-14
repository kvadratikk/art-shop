import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import AppSlice from '../../store/reducers/AppSlice';

import './style.css';

import Card from './Card/Card';
import ICard from '../../interfaces/ICard';

const Cards = ({ cards }: { cards: ICard[] }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCurrentCard } = AppSlice.actions;
  const [isLoadAllImg, setIsLoadAllImg] = useState(0);

  const showPopup = (card: ICard) => {
    dispatch(setCurrentCard(card));
    navigate(`details/${card?.id}`);
  };

  return (
    <ul className="cards" style={isLoadAllImg === cards.length ? {} : { opacity: '0' }}>
      {cards.map((card) => (
        <li className="cards__item" key={Number(card.id)} onClick={() => showPopup(card)}>
          <Card card={card} setIsLoadAllImg={setIsLoadAllImg} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
