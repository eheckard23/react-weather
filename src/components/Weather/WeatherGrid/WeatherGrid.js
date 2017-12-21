import React from 'react';

import JSXStyle from 'styled-jsx/style';

import CityContainer from './CityContainer/CityContainer';

const WeatherGrid = ({ city, weather }) => (
	<section className='weather-grid'>
		<JSXStyle id='weather-grid' css={`
			.weather-grid {
				display: grid;
				grid-template-columns: 10% auto 10%;
				grid-template-rows: 50px 400px 50px;
			}
		`} />
		<CityContainer city={city} weather={weather} />
	</section>
)

export default WeatherGrid;