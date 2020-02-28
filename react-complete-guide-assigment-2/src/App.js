import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  wordDisplayListener = () => {
    
  }

  render() {
    return (
      <div className="App">
        <p>
        <input type="text" onChange={this.wordDisplayListener()}/>
        </p>
      </div>
    );
  }
}

export default App;
