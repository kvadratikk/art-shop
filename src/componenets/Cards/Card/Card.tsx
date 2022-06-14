import './style.css';

import ICard from '../../../interfaces/ICard';

const Card = ({
  card,
  setIsLoadAllImg,
}: {
  card: ICard;
  setIsLoadAllImg: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { title, server, views, url_m, url_o } = card;

  return (
    <div className="card">
      <div className="card__inner">
        <p className="card__price">{server + ' $'}</p>
        <img
          className="card__img"
          src={url_m || url_o}
          alt="card-image"
          onLoad={() =>
            setIsLoadAllImg((prev) => {
              return prev + 1;
            })
          }
        />
        <p className="card__views">{views}</p>
      </div>
      <p className="card__title">{title}</p>
      <a className="card__info" href="/" onClick={(e) => e.preventDefault()}>
        more info
      </a>
    </div>
  );
};

export default Card;
