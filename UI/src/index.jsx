import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './index.css';

const store = configureStore();

// store.dispatch(loginUser({ userType: 'admin', user: {}, userToken: 'mytoken'}));
// const state = store.getState();
// console.log(state);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(app, document.getElementById('app'));
