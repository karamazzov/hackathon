import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import './index.css';



const defaultState = {

	appName: 'hackathon',
	articles: null

};

const reducer = function(state = defaultState, action) {

	return state;

};

const store = createStore(reducer);


ReactDOM.render((

  <Provider store={store}>
  <App />
  </Provider>),
  document.getElementById('root')
);
