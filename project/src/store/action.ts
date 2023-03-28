import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/type';

export const resetCity = createAction('city/reset');

export const changeCity = createAction<CityName>('city/change');

