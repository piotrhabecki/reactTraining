import React, { Component } from 'react';
import './App.css';
import {Validation} from './validation'
import {Char} from './char'

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
      this.setState({userInput: event.target.value});
  }
  
  deleteChartHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
      character={ch}
      key={index}
      clicked={() => this.deleteChartHandler(index)}/>;
    });

    return (
      <div className="App">
        <p>
        <input 
        type="text" 
        onChange={this.inputChangeHandler} 
        value={this.state.userInput} />
        </p>
        <p>
          {this.state.userInput}
        </p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
