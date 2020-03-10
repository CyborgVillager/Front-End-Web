import React, {Component} from "react";
import PropTypes from 'prop-types';
import Todos from "./Todos";

export class TodoItem extends Component{
    getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
    render() {
        return(
            <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>

            </div>
        )
    }
}
/* Prop Types */
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem