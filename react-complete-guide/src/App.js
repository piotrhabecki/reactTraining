import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Piotr', job: 'tester' },
      { name: 'Pawel', job: 'developer' }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, job: 'tester developer' },
        { name: 'Pawel', job: 'developer' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, job: 'tester developer' },
        { name: 'Pawel', job: 'developer' }
      ]
    })
  }

  togglePersonsHandler = () =>{

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  whatToWrite = () => {
    let returnedString = "";
    this.state.showPersons ? returnedString = "hide" : returnedString = "show";
    return returnedString; 
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherti',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">

        <h1>I'm react page</ h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>{this.whatToWrite()} persons</button>

        { this.state.showPersons ? 
          <div>
          <Person
            name={this.state.persons[0].name}
            job={this.state.persons[0].job}
            click={this.switchNameHandler.bind(this, 'Karolina')}
            changed={this.nameChangedHandler}
          />

          <Person
            name={this.state.persons[1].name}
            job={this.state.persons[1].job}
            click={this.switchNameHandler}> My task is: C2E
          </ Person>

        </div> : null
        }
      </div>
    );
  }
}

export default App;
