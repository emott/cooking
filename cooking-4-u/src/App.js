import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cooking 4 U</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <iframe src="https://giphy.com/embed/GcSqyYa2aF8dy" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/personal-shia-labeouf-just-saying-GcSqyYa2aF8dy">Let's Just do it boys</a></p>
        </p>
      </div>
    );
  }
}

export default App;
