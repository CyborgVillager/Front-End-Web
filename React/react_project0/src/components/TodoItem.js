import React, {Component} from "react";
import PropTypes from 'prop-types';
import Todos from "./Todos";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#c3e8ec',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    }


   render(){
    const { id, title } = this.props.todo;
    return(
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{ ' '}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
            </p>
        </div>
    )

    }
}


   /* Prop Types */
    TodoItem.propTypes = {
        todo: PropTypes.object.isRequired
    }

/* Button Style */
const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem