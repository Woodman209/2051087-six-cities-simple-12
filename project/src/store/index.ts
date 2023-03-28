/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({ reducer });
