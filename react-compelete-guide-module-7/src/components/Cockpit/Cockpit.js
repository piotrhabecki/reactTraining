import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-contex'



const Cockpit = (props) => {

    const authContext = useContext(AuthContext)

    const toggleButtonRef = useRef(null);

    useEffect(() => {    
        toggleButtonRef.current.click();
    }, [])

    useEffect(()=>{
        console.log('[Cockpit.js] use effect')
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        },1000)
        return () => {
            clearTimeout(timer)
            console.log('[Cockpit.js] cleanup useEffect')
        }
    }, []);

    useEffect(()=> {
        console.log('[Cockpit.js] use effect 2nd')
        return () => {
            console.log('[Cockpit.js] cleanup useEffect 2nd')
        }
    })

    const whatToWrite = () => {
        let returnedString = "";
        props.showPersons ? returnedString = "hide" : returnedString = "show";
        return returnedString;
    }

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);  //classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>I'm {props.title}</ h1>
            <p className={assignedClasses.join(' ')}>Check dynamic classes</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>
                {whatToWrite()} persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    )
}

export default React.memo(Cockpit);