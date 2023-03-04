import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type RentCount = {
  count: number;
}

function App({count}: RentCount): JSX.Element {
  return (
    <WelcomeScreen count = {count}></WelcomeScreen>
  );
}

export default App;
