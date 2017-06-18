import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {loadState, saveState} from './utils/localStorage'
import searchApp from './reducers'
import App from './components/App'
import throttle from 'lodash/throttle'

const persistedState = loadState();

const store = createStore(
  searchApp,
  persistedState,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)

store.subscribe(throttle(()=>{
  saveState({
    searchResults: store.getState().searchResults
  },store.getState().storageList);
},1000));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
