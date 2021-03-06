import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fafa1', name: 'Max', age: 28 },
      { id: 'fafa21', name: 'Manu', age: 29 },
      { id: 'fafa64', name: 'Stephanie', age: 26 }
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

    this.setState({ persons: persons })

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();id = 'fafa'
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePerson = () => {
    const showingPersons = this.state.showPersons
    this.setState({ showPersons: !(showingPersons) })
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
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
      btnClass = classes.Red;
    }



    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(assignedClasses.red); // classes= ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(assignedClasses.bold); // classes = ['red', 'bold']
    }

    return (

      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
