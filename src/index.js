// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';
// import App from './Application/App';
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
// import logger from 'redux-logger'
// import { Provider } from 'react-redux'
// import rootReducer from './Application/reducers/rootReducers'
// import  getArticles  from './actions/articlesFun';

// const store = createStore(rootReducer,applyMiddleware(thunk,logger))

// store.dispatch(getArticles())
// ReactDOM.render(<Provider store = {store}> <App /></Provider>,document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import {getArticles} from './actions' 
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
store.dispatch(getArticles())
ReactDOM.render(
<Provider store= {store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
