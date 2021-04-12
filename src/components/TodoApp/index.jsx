import React, { Component } from 'react';
import TodoHeader from '../TodoHeader'
import TodoList from '../TodoList'
import TodoFooter from '../TodoFooter'
import './index.css';

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'somke',
        done: false
      },
      {
        id: 2,
        title: 'drink',
        done: false
      },
      {
        id: 3,
        title: 'perm',
        done: true
      }
    ]
  }

  // 当子组件向父组件传值时，可通过父组件向组件传递一个事件实现
  addTodo = (todo) => {
    let newTodos = [...this.state.todos, todo]
    this.setState({
      todos: newTodos
    })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }


  render () {
    const { todos } = this.state
    return (
      <div className="todo-app">
        <TodoHeader addTodo={this.addTodo}></TodoHeader>
        <TodoList todos={todos} updateTodo={this.updateTodo}></TodoList>
        <TodoFooter></TodoFooter>
      </div>
    );
  }
}

export default TodoApp;
