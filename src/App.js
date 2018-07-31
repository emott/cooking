/* eslint-disable indent,no-trailing-spaces */
import React, { Component } from 'react';
import logo from './logo.svg';
import Reciper from './Reciper';
import './App.css';

class Header extends Component {
  render () {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Cooking 4 U</h1>
        </header>
    );
  }
}

class App extends Component {
  sayHello () {
    return (
      console.log('Whaddup bois')
    );
  }

  render () {
    return (
      <div className="App">
        <Header />
        <div className="App-sidenav">
          <button onClick={this.sayHello}>Test</button>
          <button>Recipes</button>
        </div>
        <div className="App-recipediv">
          <Reciper />
        </div>
        <div className="App-rightnav">
          <h4>Current Ingredients</h4>
          <ul className="current-ingredients">
            <li>None</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
