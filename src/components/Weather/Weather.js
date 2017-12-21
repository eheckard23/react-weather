import React, { Component } from 'react';
import axios from 'axios';

import JSXStyle from 'styled-jsx/style';

import WeatherGrid from './WeatherGrid/WeatherGrid';

export default class Weather extends Component {

	constructor() {
		super();

		this.state = {
			weatherUrl: 'https://api.openweathermap.org/data/2.5/forecast?q=',
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
				// console.log(resp.data);
				return this.setState({ 
					query: this.query.value, 
					weather: resp.data, 
					isWeatherSet: true 
				});
			});
	}

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log(nextState);
	// }

	render() {
		return (
			<div className='weather'>
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
					<button id='weather-form-btn' type='submit'>Search</button>
				</form>
					<WeatherGrid city={this.state.weather.city} weather={this.state.weather} />
					<JSXStyle styleId='weather' css={`
						.weather form {
							margin-left: 10%;
							padding-left: 5%;
						}
						input {
							background: none;
							border: none;
							font-size: 24px;
							outline: none;
							color: white;
						}
						input::placeholder {
							color: white;
						}
						#weather-form-btn {
							padding: 10px 20px;
							background: none;
							border: solid 2px #1ECD97;
							border-radius: 50px;
							color: #1ECD97; 
							cursor: pointer;
							font-size: 24px;
						}
					`} />
			</div>
			
		)
	}
}