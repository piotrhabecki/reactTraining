import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: 'abc1', name: 'Piotr', job: 'tester' },
      { id: 'avc2', name: 'Karolina', job: 'tester' },
      { id: 'def3', name: 'Pawel', job: 'developer' },
      { id: 'ghi4', name: 'Michał', job: 'junior developer' }
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

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
      const persons = [... this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
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

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={persons.name} 
            job={persons.job}
            key={index}
            changed={(event) => this.nameChangedHandler(event, persons.id)} />
          })}

      </div> 
      );
    }

    return (
      <div className="App">

        <h1>I'm react page</ h1>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>{this.whatToWrite()} persons</button>

          {persons}

      </div>
    );
  }
}

export default App;
