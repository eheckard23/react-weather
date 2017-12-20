import React from 'react';

import _JSXStyle from 'styled-jsx/style';

import City from '../City/City';

const CityContainer = ({ city, weather }) => (
	<div className='city-container'>
		<_JSXStyle styleId='city-container' css={`
			.city-container {
				grid-column-start: 2;
				grid-column-end: 3;
				grid-row-start: 2;
				grid-row-end: 3;
				background-color: #383F51;
				border-radius: 8px;
				padding-left: 5%;
			}
		`} />
		{
			city &&
				<City city={city} weather={weather} />
		}
	</div>
)

export default CityContainer;