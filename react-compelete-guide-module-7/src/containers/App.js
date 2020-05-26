import React, { Component } from 'react';
//import './App.css';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
import AuthContext from '../context/auth-contex'


class App extends Component {

  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor')
  }
  
  state = {
    persons: [
      { id: 'abc1', name: 'Piotr', job: 'tester' },
      { id: 'avc2', name: 'Karolina', job: 'tester' },
      { id: 'def3', name: 'Pawel', job: 'developer' },
      { id: 'ghi4', name: 'Michał', job: 'junior developer' }
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false,
  }

  static getDerivedStateFromProp(props, state)
  {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMout()
  {
    console.log('[App.js] componentDidMout');
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate')
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

  toggleShowCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({showCockpit: !doesShow})
    console.log(doesShow)
  }

  loginHandler = () => {
    this.setState({authenticaed: true});
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticaed} />
    }

    return (

      <WithClass classes={classes.App}>
        <button onClick={this.toggleShowCockpitHandler}>Toggle Cockpit</button>
        <AuthContext.Provider value={{authenticaed: this.state.authenticaed, login: this.loginHandler}}>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            /> : null
          }
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
