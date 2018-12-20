import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' 

class App extends Component {

  state = {
    persons: [
      { name: 'Dylan', age: 21},
      { name: 'Jhoel', age: 23},
      { name: 'Stephannie', age: 25},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //DON'T DO THIS this.state.persons[0].name="Joanne";
    this.setState({persons: [
      { name: newName, age: 21},
      { name: 'Jhoel', age: 24},
      { name: 'Stephannie', age: 25},
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Dylan', age: 21},
      { name: event.target.value, age: 24},
      { name: 'Stephannie', age: 25},
    ]
  })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  
  

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>Hello from the other side</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Alejandro')}
          changed={this.nameChangedHandler}>Hello from the other side</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>Hello from the other side</Person>
      </div> 
      );
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}  
      </div>
    );
  }
}

export default App;
