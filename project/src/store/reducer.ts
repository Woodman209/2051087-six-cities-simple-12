import { createReducer } from '@reduxjs/toolkit';
import { currentCity } from './mock';
import { offers } from '../mocks/offers';
import { filterOffersByCityName } from '../utils/utils';
import { changeCity, resetCity } from './action';

const initialState = {
  cityName: currentCity.name,
  offers: filterOffersByCityName(offers, currentCity.name),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCity, (state) => {
      if (state.cityName === initialState.cityName) {
        return;
      }
      state.cityName = initialState.cityName;
      state.offers = initialState.offers;
    })
    .addCase(changeCity, (state, action) => {
      if (action.payload === state.cityName) {
        return;
      }
      state.cityName = action.payload;
      state.offers = filterOffersByCityName(offers, action.payload);
    });
});
