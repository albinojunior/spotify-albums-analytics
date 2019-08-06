import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

import './styles/global.scss';
import { getAuthorizationToken } from './services/auth';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [autheticated, setAuthenticated] = useState(false);
  useEffect(() => {
    getAuthorizationToken().then(() => {
      setAuthenticated(true);
    });
  }, []);
  return <Provider store={store}>{autheticated ? <Routes /> : <Loader />}</Provider>;
};

export default App;
