import React from 'react'
import { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    render() {


        console.log('[Prsons.js] rendering...')

        return this.props.persons.map((persons, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={persons.name}
                job={persons.job}
                key={persons.id}
                changed={(event) => this.props.changed(event, persons.id)}
            />
        })
    }

    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons)
    //     {
    //         return true
    //     }
    //     else
    //     { 
    //         return false
    //     }

    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }
}


export default Persons;