import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  /*countTodo(id){
      this.props.countTodo(id);
  }*/

  todoStatus(id){
      this.props.todoStatus(id)
  }

  render() {
    return (
      <div className="todoWrapper">
          <p> <input className="widthInput" value="" type="checkbox" id="checkbox" /> <button className="btn btn-primary" onClick={(e)=> this.removeTodo(this.props.id)}>Remove</button><label for="checkbox"> {this.props.todo.text}</label></p>
      </div>

    );
  }
}
