/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import ErrorNotFound from '../../pages/404-screen/404-screen';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { AppRoute } from '../../const';
import { GetNearbyOffers, Reviews, UserLogin, City, CityNames } from '../../types/type';
import RoomWrapper from '../room-wrapper/room-wrapper';
import { currentCity } from '../../store/mock';
import { useAppDispatch } from '../../hooks';
import { setOffers } from '../../store/action';
import { offers } from '../../mocks/offers';


type RentCount = {
  count: number;
  getNearbyOffers: GetNearbyOffers;
  reviews: Reviews;
  userLogin: UserLogin;
  currentCity: City;
  cityNames: CityNames;
  currentCityName: CityNames;
}

function App(props: RentCount): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(setOffers(offers));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen count={props.count} offers={[]} currentCity={{
            location: {
              latitude: 0,
              longitude: 0,
              zoom: 0
            },
            name: ''
          }}
          currentCityName={currentCity.name} cityNames={[]} >
          </MainScreen>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={`${AppRoute.Room}:id`}
          element={
            <RoomWrapper
              getNearbyOffers={props.getNearbyOffers}
              reviews={props.reviews}
              isUserLoggedIn={props.userLogin !== undefined}
            />
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<ErrorNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
