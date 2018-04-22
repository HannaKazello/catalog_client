// @flow

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SearchkitManager, SearchkitProvider } from 'searchkit';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import type { RouterHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home';
import Catalog from './containers/Catalog';
import Login from './containers/Login';

import configureStore from './store';

const history: RouterHistory = createHistory({ basename: '/' });
const store = configureStore({}, history);
const searchkit = new SearchkitManager('http://localhost:9200/');

class App extends Component {
  history: RouterHistory = history;

  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Provider store={store}>
          <ConnectedRouter history={history} basename="/">
            <div>
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </div>
          </ConnectedRouter>
        </Provider>
      </SearchkitProvider>
    );
  }
}

export default App;
