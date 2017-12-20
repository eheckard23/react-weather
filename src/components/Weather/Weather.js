import React, { Component } from 'react';
import axios from 'axios';

import WeatherGrid from './WeatherGrid/WeatherGrid';

export default class Weather extends Component {

	constructor() {
		super();

		this.state = {
			weatherUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
			appId: ',us&APPID=d1167d6aafdb5e3078094ce40b2b7e68',
			query: '',
			weather: {},
			isWeatherSet: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const queryString = `${this.state.weatherUrl}${this.query.value}${this.state.appId}`;
		axios.get(queryString)
			.then(resp => {
				return this.setState({ 
					query: this.query.value, 
					weather: resp.data, 
					isWeatherSet: true 
				});
			});
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(nextState);
	}

	render() {
		return (
			<div>
				<h1>Weather</h1>
				<form 
					ref={form => this.weatherForm = form}
					onSubmit={this.handleSubmit}
				>
					<input 
						type="text"
						ref={input => this.query = input}
						placeholder='Orlando, Dallas...'
					/>
					<button type='submit'>Search</button>
				</form>
					<WeatherGrid city={this.state.query} weather={this.state.weather} />
			</div>
			
		)
	}
}