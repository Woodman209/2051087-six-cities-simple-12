import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { userLogin } from './store/mock';
import { offers, nearbyOffers } from './mocks/offers';
import { reviews } from './types/reviews';
import { Offers } from './types/type';
import { CityNames } from './const';
import { Provider } from 'react-redux';
import { store } from './store/index';

const Setting = {
  count: 3
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        count={Setting.count}
        getNearbyOffers={getNearbyOffers}
        offers={offers}
        reviews={reviews}
        userLogin={userLogin}
        cityNames={CityNames} currentCity={{
          location: {
            latitude: 0,
            longitude: 0,
            zoom: 0
          },
          name: ''
        }} currentCityName={[]}
      />
    </Provider>
  </React.StrictMode>,
);

function getNearbyOffers(id: number): Offers {
  return nearbyOffers;
}
