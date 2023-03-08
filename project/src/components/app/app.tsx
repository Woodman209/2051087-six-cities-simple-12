import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
// import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
// import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen/property-not-logged-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import ErrorNotFound from '../../pages/404-screen/404-screen';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { AppRoute } from '../../const';

type RentCount = {
  count: number;
}

function App({ count }: RentCount): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen count={count}></MainScreen>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={`${AppRoute.Room}:id`}
          element={<PropertyScreen />}
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
