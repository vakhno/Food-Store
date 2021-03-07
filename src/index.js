import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './sass/app.sass';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<Router basename="/Food-Store">
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);