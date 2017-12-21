import React, { Component } from 'react';
import { scaleTime, scaleLinear } from '@vx/scale';
import { Group } from '@vx/group';
import { AreaClosed }  from '@vx/shape';
import { extent, max } from 'd3-array';

export default class ForecastGraph extends Component {

	constructor(props) {
		super(props);

		const data = props.weather.list;

		// graph dimensions
		const width = 400;
		const height = 300;

		// bounds and margins
		const margin = {
			top: 60,
			bottom: 60,
			left: 80,
			right: 80
		};
		const xMax = width - margin.left - margin.right;
		const yMax = height - margin.top - margin.bottom;

		// accessors
		const x = data => data.dt_txt;
		const y = data => data.main;
		
		// scaling for the graph
		const xScale = scaleTime({
			range: [0, xMax],
			domain: extent(data, x)
		});
		const yScale = scaleLinear({
			range: [yMax, 0],
			domain: [0, max(data, x)]
		});

		this.state = {
			data,
			width,
			height,
			margin,
			xMax,
			yMax,
			x,
			y,
			xScale,
			yScale
		}

	}

	render() {
		const { width, height, margin, data, xScale, yScale, x, y } = this.state;
		return(
			<svg width={width} height={height}>
				<Group top={margin.top} left={margin.left}>
					<AreaClosed 
						data={data}
						xScale={xScale}
						yScale={yScale}
						x={x}
						y={y}
						fill={'red'}
					/>
				</Group>
			</svg>
		)
	}
}