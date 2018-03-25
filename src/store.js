// @flow
/* global window */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import type { RouterHistory } from 'react-router-dom';

import rootReducer from './reducers/app';
import rootSaga from './sagas';

const configureStore = (initialState: Object = {}, history: RouterHistory) => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const routerMiddleware = createRouterMiddleware(history);

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
