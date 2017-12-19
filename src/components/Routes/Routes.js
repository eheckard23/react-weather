import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Weather from '../Weather/Weather';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/weather' component={Weather} />
	</Switch>
)

export default Routes;