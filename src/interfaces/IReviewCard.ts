export default interface IReviewCard {
  name: string;
  date: string;
  photo: string | FileList;
  rate: string;
  comment: string;
  promo: boolean;
  agreement: boolean;
}
