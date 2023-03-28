/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
import MainScreenApp from '../../components/card/card-component';
import GeoMap from '../../components/geo-map/geo-map';
import { City, CityNames, Offer, Offers } from '../../types/type';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

type RentCountProps = {
  count: number;
  currentCity: City;
  cityNames: CityNames;
  children: never[];
  currentCityName: string;
  offers: Offers;
}

type ActiveOffer = Offer | null;

function MainScreen({ count, offers, currentCity, cityNames, children }: RentCountProps): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<ActiveOffer>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const allOffers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainTagAdditionalClassName = offers.length === 0 ?
    'page__main--index-empty' :
    '' ;
  return (
    <>
      <div className="tabs">
        <section className="locations container">
          <CitiesList
            cityNames={cityNames}
            currentCityName={currentCity.name}
            onChangeCityName={(cityName) => dispatch(changeCity(cityName))}
          />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{count} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {
                Array(count).fill(<MainScreenApp offer={
                  {
                    bedrooms: 0,
                    city: {
                      location: {
                        latitude: 52.370216,
                        longitude: 4.895168,
                        zoom: 8,
                      },
                      name: 'Amsterdam',
                    },
                    description: '',
                    goods: [],
                    host: {
                      avatarUrl: '',
                      id: 0,
                      isPro: false,
                      name: ''
                    },
                    id: 0,
                    isPremium: false,
                    images: [],
                    location: {
                      latitude: 0,
                      longitude: 0,
                      zoom: 8,
                    },
                    maxAdults: 0,
                    price: 0,
                    rating: 0,
                    title: '',
                    type: ''
                  }
                }
                onActive={() => setHoveredOffer(null)}
                onBlur={() => setHoveredOffer(null)}
                // eslint-disable-next-line react/jsx-closing-bracket-location
                />
                )
              }
            </div>
          </section>
          <div className="cities__right-section">
            <GeoMap activeOffer={hoveredOffer} offers={offers} className={offers.length <= 0 ? 'cities__map' : ''} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;

