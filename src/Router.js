import React from 'react';
import { Router, Route } from 'react-router'

import App from './App';
import Lists from './components/Lists';
import Reverser from './components/Reverser';
import Children from './components/Children';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/lists" component={Lists}/>
      <Route path="/reverser" component={Reverser}/>
      <Route path="/children" component={Children}/>

    </div>
  </Router>
);

export default AppRouter;