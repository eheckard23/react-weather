import React from 'react';
import JSXStyle from 'styled-jsx/style';

import { kelvinToFahrenheit } from '../../../../Utils/convertTemp';

import ForecastGraph from './ForecastGraph/ForecastGraph';

const City = ({ city, weather }) => (
	<article className='city'>
		<h1 className='city-name'>{city.name.toUpperCase()}</h1>
		<ForecastGraph weather={weather} />
		<JSXStyle styleId='city' css={`
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