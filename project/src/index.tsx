import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { currentCity, userLogin } from './store/mock';
import { offers, offersCount, nearbyOffers } from './mocks/offers';
import { reviews } from './types/reviews';
import { Offers } from './types/type';

const Setting = {
  count: 3
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      count={Setting.count}
    />
  </React.StrictMode>,
);
