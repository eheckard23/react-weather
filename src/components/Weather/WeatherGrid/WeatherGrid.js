import React from 'react';

import _JSXStyle from 'styled-jsx/style';

import CityContainer from './CityContainer/CityContainer';

const WeatherGrid = ({ city, weather }) => (
	<section className='weather-grid'>
		<_JSXStyle id='weather-grid' css={`
			.weather-grid {
				display: grid;
				grid-template-columns: 10% auto 10%;
				grid-template-rows: 50px 400px 50px;
				border: solid 2px red;
			}
		`} />
		<CityContainer city={city} weather={weather} />
	</section>
)

export default WeatherGrid;