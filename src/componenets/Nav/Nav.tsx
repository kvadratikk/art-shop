import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../types/Store';

import './style.css';

const Nav = () => {
  const currentCard = useSelector((state: RootState) => state.currentCard);

  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        {currentCard ? (
          <li className="nav__item">
            <NavLink className="nav__link active" to="/details/:id">
              Product Details
            </NavLink>
          </li>
        ) : null}
        <li className="nav__item">
          <NavLink className="nav__link" to="/reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
