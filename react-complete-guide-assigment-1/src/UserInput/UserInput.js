import React from 'react';

const userInput = (props) =>{
    const inputStyle = {
        border: '2px solird red'
    };

    return <input 
    type="text" 
    style={inputStyle}
    onChange={props.changed} 
    value={props.currentName} />;
};

const userPassword = (props) =>{
    return <input 
    type="password" 
    onChange={props.changed} />;
}

export default userInput; userPassword;