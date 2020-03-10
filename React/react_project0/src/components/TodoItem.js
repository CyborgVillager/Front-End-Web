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
    return(
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete}/>{ ' '}
                {this.props.todo.title}
            </p>
        </div>
    )

    }
}


   /* Prop Types */
    TodoItem.propTypes = {
        todo: PropTypes.object.isRequired
    }


export default TodoItem