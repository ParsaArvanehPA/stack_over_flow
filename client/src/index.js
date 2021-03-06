import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

import './styles/index.css';

const routing = (
	<BrowserRouter>
		<App>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/signup' component={Signup} />
				<Route component={NotFound} />
			</Switch>
		</App>
	</BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
