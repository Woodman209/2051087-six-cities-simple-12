/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import MainScreenApp from '../../components/card/card-component';
import GeoMap from '../../components/geo-map/geo-map';
import { Locations, Offers } from '../../types/type';

type RentCountProps = {
  count: number;
  offers: Offers;
}

function MainScreen({ count, offers }: RentCountProps): JSX.Element {
  const locations = getLocations(offers);
  return (
    <>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href="/#">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="/#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
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
                onActive={function (): void {
                  throw new Error('Function not implemented.');
                }}
                onBlur={function (): void {
                  throw new Error('Function not implemented.');
                }}
                // eslint-disable-next-line react/jsx-closing-bracket-location
                />
                )
              }
            </div>
          </section>
          <div className="cities__right-section">
            <GeoMap className={locations.length <= 0 ? 'cities__map' : ''} locations={locations} />
          </div>
        </div>
      </div>
    </>
  );
}

function getLocations(offers: Offers): Locations {
  return offers.map((offer) => offer.location);
}

export default MainScreen;
