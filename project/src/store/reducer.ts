import { createReducer } from '@reduxjs/toolkit';
import { currentCity } from './mock';
import { offers } from '../mocks/offers';
import { resetCity } from './action';

const initialState = {
  city: currentCity,
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(resetCity, (state) => {
    if (state.city.name === initialState.city.name) {
      return;
    }
    state.city = initialState.city;
    state.offers = initialState.offers;
  });
});
