import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Game from './Game'

class App extends Component {
  render () {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
