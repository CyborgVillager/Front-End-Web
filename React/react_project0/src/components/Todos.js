/* for js Cap first letter, python lower case
 First letter for begin of filename
 */

import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component{
    render(){




  /* JSX start */
  return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
  ))
    }
}
    /* JSX end */
/* Prop Types */
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
