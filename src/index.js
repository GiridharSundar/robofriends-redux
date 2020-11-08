import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger,applyMiddleware} from 'redux-logger'; 
import {createStore} from 'redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from './reducer'
import './index.css';
import 'tachyons'; 

const logger = createLogger();
const store = createStore(searchRobots,applyMiddleware(logger));

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
