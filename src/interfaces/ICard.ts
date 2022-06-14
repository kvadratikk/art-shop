export default interface ICard {
  id: string;
  title: string;
  server: string;
  views: string;
  description: {
    _content: string;
  };
  tags: string;
  url_m: string;
  url_o?: string;
}
