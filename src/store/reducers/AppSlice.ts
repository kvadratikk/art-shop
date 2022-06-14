import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import State from '../../types/State';

import apiRequest from './ActionCreators';

import IReviewCard from '../../interfaces/IReviewCard';
import ICard from '../../interfaces/ICard';

const formData = {
  name: '',
  date: '',
  agreement: false,
  photo: '',
  rate: '5',
  promo: false,
  comment: '',
};

const pages = {
  current: 1,
  all: 0,
};

export const initialState: State = {
  formCards: [],
  formData: formData,
  isDisable: true,
  errors: {},
  cards: [],
  isLoad: true,
  isNotFound: false,
  pages: pages,
  perpage: 15,
  sort: 'date-posted-desc',
  searchValue: localStorage.getItem('searchValue') || '',
  currentCard: null,
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addFormCards(state, { payload }: PayloadAction<IReviewCard>) {
      state.formCards = [...state.formCards, payload];
    },
    addFormData(state, { payload }: PayloadAction<IReviewCard>) {
      state.formData = payload;
    },
    setIsDisable(state, { payload }: PayloadAction<boolean>) {
      state.isDisable = payload;
    },
    addErrors(state, { payload }: PayloadAction<Record<string, string | undefined>>) {
      state.errors = payload;
    },
    addCards(state, { payload }: PayloadAction<ICard[]>) {
      state.cards = payload;
    },
    setIsLoad(state, { payload }: PayloadAction<boolean>) {
      state.isLoad = payload;
    },
    setIsNotFound(state, { payload }: PayloadAction<boolean>) {
      state.isNotFound = payload;
    },
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    setPage(state, { payload }: PayloadAction<Record<string, number>>) {
      state.pages = { ...state.pages, ...payload };
    },
    setPerPage(state, { payload }: PayloadAction<number>) {
      state.perpage = payload;
    },
    setSort(state, { payload }: PayloadAction<string>) {
      state.sort = payload;
    },
    setCurrentCard(state, { payload }: PayloadAction<ICard | null>) {
      state.currentCard = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiRequest.pending, (state) => {
      state.isLoad = false;
    });
    builder.addCase(apiRequest.fulfilled, (state, { payload }) => {
      if (payload.photos.photo.length) {
        state.cards = payload.photos.photo;
        state.isNotFound = false;
      } else {
        state.cards = payload.photos.photo;
        state.isNotFound = true;
      }

      state.pages = { ...state.pages, all: payload.photos.pages };
      state.isLoad = true;
    });
  },
});

export default AppSlice;
