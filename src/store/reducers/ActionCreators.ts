import { createAsyncThunk } from '@reduxjs/toolkit';

import State from '../../types/State';
import ICard from '../../interfaces/ICard';

const apiRequest = createAsyncThunk<
  {
    photos: {
      photo: ICard[];
      pages: number;
    };
  },
  undefined,
  { state: State }
>('/', async (_, { getState }) => {
  const { searchValue, sort, pages, perpage } = getState();

  const tags = 'painting, buy';
  const apiKey = 'daf510ce0ef2341adee00f3c33b22fef';

  const card = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&page=${
      pages.current
    }&text=${searchValue}&sort=${sort}&tags=${tags}&tag_mode=all&safe_search=1&content_type=3&extras=url_m,url_o,views,description,tags&per_page=${String(
      perpage
    )}&format=json&nojsoncallback=1`
  );

  return await card.json();
});

export default apiRequest;
