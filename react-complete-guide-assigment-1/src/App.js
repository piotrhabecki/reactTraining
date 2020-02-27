import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import UserPasswod from './UserInput/UserInput';


class App extends Component {

  state = {
    username: 'super admin',
    password: 'password'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  usernamePasswordChangeHandler = (event) => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        changed={this.usernameChangeHandler}
        currentName={this.state.username} />
        <p><UserPasswod changed={this.usernamePasswordChangeHandler} /></p>
        <UserOutput userName={this.state.username} password={this.state.password} />
        <UserOutput userName="Piotr" />
        <UserOutput userName="Piotr" />
      </div>
    );
  }
}

export default App;
