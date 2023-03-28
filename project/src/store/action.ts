import { createAction } from '@reduxjs/toolkit';
import { CityName, Offers } from '../types/type';

export const changeCity = createAction<CityName>('city/change');

export const setOffers = createAction<Offers>('offers/set');

