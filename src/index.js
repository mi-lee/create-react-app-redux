import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store/'
import App from './containers/App';

import './styles/index.css';

const Root = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(
  Root,
  document.getElementById('root'),
);
