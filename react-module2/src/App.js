import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id : 'fafa1', name: 'Max', age: 28 },
      { id :'fafa21', name: 'Manu', age: 29 },
      { id : 'fafa64', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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
    //new persons
    persons[personIndex] = person;
    
    this.setState({persons: persons})

  }

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();id = 'fafa'
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  togglePerson = () => {
    const showingPersons = this.state.showPersons
    this.setState({showPersons: !(showingPersons)})
  }

  render () {

    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer'
    } 

    let persons = null;

    if(this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map( (person,index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          changed={(evenet) => this.nameChangedHandler(evenet, person.id)}
          key={person.id}
          /> 
        })}
      </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePerson}>Switch Name</button> 
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
  