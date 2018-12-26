import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor');
    this.state = {
      persons: [
        { id: 'jaja1', name: 'Dylan', age: 21},
        { id: 'jaja2', name: 'Jhoel', age: 23},
        { id: 'jaja3', name: 'Stephannie', age: 25},
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true; 
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }   
  
  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate')      
  }

  

 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return{
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
      
    });
  }
  
  

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div> 
      );

      
    
    }

    
    return (
      <Auxiliary>
          <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}  
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
