import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import './index.css';
import middleware from './middleware';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
