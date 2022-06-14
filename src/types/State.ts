import IReviewCard from '../interfaces/IReviewCard';
import ICard from '../interfaces/ICard';

type State = {
  formCards: IReviewCard[];
  formData: IReviewCard;
  isDisable: boolean;
  errors: Record<string, string | undefined>;
  cards: ICard[];
  isLoad: boolean;
  isNotFound: boolean;
  pages: Record<string, number>;
  perpage: number;
  searchValue: string;
  sort: string;
  currentCard: ICard | null;
};

export default State;
