// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import type { RouterHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import Catalog from './containers/Catalog';
import Login from './containers/Login';
import SignIn from './containers/SignIn';

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
            <Route exact path="/" component={Catalog} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={SignIn} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
