import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from './components/Loader';

// pages
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const Routes = () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default Routes;
