import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'; 
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from './reducer'
import './index.css';
import 'tachyons'; 

const logger = createLogger();
const store = createStore(searchRobots,applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
