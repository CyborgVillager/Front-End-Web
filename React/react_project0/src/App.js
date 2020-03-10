import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todos";
import {render} from "react-dom";

  class App extends Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'Take out the trash',
          completed: false
        },
        {
          id: 2,
          title: 'Sushi',
          completed: false
        },
        {
          id: 3,
          title: 'HW',
          completed: false
        },
      ]
    }
    /* Once user checks off a task, it will update the TODo table signifying the completion of task */
    markComplete = (id) => {
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id == id){
            todo.completed = !todo.completed
        }
        return todo;
        })
      });
    }

/* Delete ToDo option */
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}

 render(){

  /* JSX start */
  /* import Todos/
  from import Todos from "./components/Todos"; */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Application</h1>
        <p>
          One step @ a time.
          <i> ^_*</i>
        </p>
      </header>
 <Todos todos={this.state.todos} markComplete={this.markComplete}
 delTodo={this.delTodo}/>

    </div>
  );

    /* JSX end */
  }

}
export default App;
