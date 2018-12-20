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
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //DON'T DO THIS this.state.persons[0].name="Joanne";
    this.setState({persons: [
      { name: 'Lady Gaga', age: 21},
      { name: 'Jhoel', age: 23},
      { name: 'Stephannie', age: 25},
    ]
  });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hello from the other side</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hello from the other side</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hello from the other side</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
