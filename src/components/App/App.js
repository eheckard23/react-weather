import React, { Component } from 'react';

import Header from '../Header/Header';
import Routes from '../Routes/Routes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}
