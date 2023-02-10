import './App.css';
import { Navbar } from './components';
import { AppRouter } from './router/AppRouter';

function SpaceshipApp() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default SpaceshipApp;
