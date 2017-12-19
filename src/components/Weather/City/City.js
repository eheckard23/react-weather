import React from 'react';

import { kelvinToFahrenheit } from '../../../Utils/convertTemp';

const City = ({ city, main, wind, weather}) => (
	<article>
		<h1>{city.toUpperCase()}</h1>
		<h1>{weather[0].main}</h1>
		<h2>{kelvinToFahrenheit(main.temp)}</h2>
	</article>
)

export default City;