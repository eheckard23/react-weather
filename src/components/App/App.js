import React, { Component } from 'react';

import _JSXStyle from 'styled-jsx/style';

import Header from '../Header/Header';
import Routes from '../Routes/Routes';
import Background from './Background/Background';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Header />
        <Routes />
        <_JSXStyle styleId='app' css={`
			.App {
				font-family: arial;
				color: white;
			}
        `} />
      </div>
    );
  }
}
