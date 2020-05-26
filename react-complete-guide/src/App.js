import React, { Component } from 'react';
//import './App.css';
import classes from './App.css';
import Person from './Person/Person';


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
      const persons = [...this.state.persons];
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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={persons.name}
              job={persons.job}
              key={persons.id}
              changed={(event) => this.nameChangedHandler(event, persons.id)} />
          })}

        </div>
      );
      btnClass = classes.Red;
    }
    
    const assignedClasses = [];
    if(this.state.persons.length <= 2)
    {
      assignedClasses.push(classes.red);  //classes = ['red']
    }
    if (this.state.persons.length <= 1)
    {
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }
    

    return (
      <div className={classes.App}>

        <h1>I'm react page</ h1>
        <p className={assignedClasses.join(' ')}>Check dynamic classes</p>

        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>
            {this.whatToWrite()} persons
          </button>

          {persons}

      </div>

    );
  }
}

export default App;
