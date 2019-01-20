import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import history from './history';
import { ActionCableProvider } from 'react-actioncable-provider';

import App from './containers/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  // {
  //   auth: { token: localStorage.getItem('token') }
  // },
  composeEnhancers(applyMiddleware(thunk)
))

ReactDOM.render(
  <ActionCableProvider url={'ws://localhost:3000/cable'}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ActionCableProvider>,
  document.querySelector('#root')
)
