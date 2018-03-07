import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import CheckStatus from './components/checkStatus'; //still working on it


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, text: "Learn to make react app!", count: 1},
        {id: 2, text: "Make dinner", count:2},
        {id: 3, text: "Meet friends!", count:3}
      ],
      nextId: 4,
        countNo:3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    var count = this.state.todos.count;
    todos.push({id: this.state.nextId, text: todoText, count: this.state.countNo});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId,
        countNo: ++this.state.countNo
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }




  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <form>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul></form>
          <CheckStatus />

        </div>
      </div>
    );
  }
}

export default App;
