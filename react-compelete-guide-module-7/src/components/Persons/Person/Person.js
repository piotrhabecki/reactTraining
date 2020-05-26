import React from 'react';
import {Component} from 'react';
import classes from './Person.css'
import AuthContext from '../../../context/auth-contex'

class Person extends Component {


    static contextType = AuthContext;

    render()
    {
        console.log('[Prson.js] rendering...')

        return (
            <div className={classes.Person}>
                {this.context.authenticaed ? <p>Authenticated</p> : <p>Please authenticate</p>}
                <p onClick={this.props.click}>I'm {this.props.name}! I am a {this.props.job}!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}


export default Person;