import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Route} from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cartReducer from './redux/cart-store/reducer'
import { PersistGate } from 'redux-persist/integration/react'
// const store = createStore(cartReducer) 
import {store, persistor} from './redux/store';
import setAuthorizationToken from './utils/setAuthorizationToken'

setAuthorizationToken(localStorage.jwtToken)

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);




