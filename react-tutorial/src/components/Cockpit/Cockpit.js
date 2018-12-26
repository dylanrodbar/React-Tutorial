import React from 'react';

import classes from './Cockpit.css';

import Auxiliary from '../../hoc/Auxiliary';

const cockpit = (props) => {

    const assignedClasses = [];
    let buttonClass = classes.Button;

    if(props.showPersons) {
        buttonClass = [classes.Button,classes.Red].join(' ');
    }
    
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
        <Auxiliary>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={buttonClass}  
            onClick={props.clicked}>Toggle Persons</button>     
        </Auxiliary>
    );
};

export default cockpit;