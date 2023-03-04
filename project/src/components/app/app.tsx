import MainScreen from '../../pages/main-screen/main-screen';

type RentCount = {
  count: number;
}

function App({count}: RentCount): JSX.Element {
  return (
    <MainScreen count = {count}></MainScreen>
  );
}

export default App;
