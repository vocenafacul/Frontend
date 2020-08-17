import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';

import store from "./store/reducers/index";


ReactDOM.render(
  <Provider store={applyMiddleware(promise)(createStore)(store)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
