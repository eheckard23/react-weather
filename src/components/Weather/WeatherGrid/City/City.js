import React from 'react';

import _JSXStyle from 'styled-jsx/style';

import { kelvinToFahrenheit } from '../../../../Utils/convertTemp';

const City = ({ city, weather }) => (
	<article className='city'>
		<h1 className='city-name'>{city.toUpperCase()}</h1>
		<h1>{weather.weather[0].main}</h1>
		<h2>{kelvinToFahrenheit(weather.main.temp)}</h2>
		<_JSXStyle styleId='city' css={`
			.city {
				grid-column-start: 1;
				grid-column-end: 2;
				grid-row-start: 1;
				grid-row-end: 2;
				
			}
			.city-name {
				font-size: 2em;
			}
		`} />
	</article>
)

export default City;