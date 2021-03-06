import React from 'react';

import {
  Home,
  Detail,
  Favorite
} from './pages'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './store/index';
import { Navbar } from './components';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/pokemon/:pokemonId">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
