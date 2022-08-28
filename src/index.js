import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { RecoilRoot } from 'recoil';
const store = configureStore()
// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <RecoilRoot>
  <Provider store={store}>
  <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
  </Provider>
  </RecoilRoot>,
  document.getElementById('root')
);


