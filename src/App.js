// @flow

import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import type { RouterHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home';
import Catalog from './components/Catalog';

import configureStore from './store';

const history: RouterHistory = createHistory({ basename: '/' });
const store = configureStore({}, history);

class App extends Component {
  history: RouterHistory = history;

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} basename="/">
          <div>
            <Route path="/catalog" component={Catalog} />
            <Route path="/" component={Home} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
