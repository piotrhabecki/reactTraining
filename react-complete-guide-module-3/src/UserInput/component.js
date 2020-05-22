import React from 'react';

export const UserInput = (props) =>{
    const inputStyle = {
        border: '2px solird red'
    };

    return <input 
    type="text" 
    style={inputStyle}
    onChange={props.changed} 
    value={props.currentName} />;
};

export const UserPassword = (props) =>{
    return <input 
    type="password" 
    onChange={props.changed} />;
}