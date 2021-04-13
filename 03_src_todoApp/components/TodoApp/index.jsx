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

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todo =>
      todo.id !== id
    )
    this.setState({ todos: newTodos })
  }

  updateAllDone = (flag) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      todo.done = flag
      return todo
    })
    this.setState({ todos: newTodos })
  }

  deleteAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo =>
      todo.done === false
    )
    this.setState({ todos: newTodos })
  }


  render () {
    const { todos } = this.state
    return (
      <div className="todo-app">
        <TodoHeader addTodo={this.addTodo}></TodoHeader>
        <TodoList todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></TodoList>
        <TodoFooter todos={todos} updateAllDone={this.updateAllDone} deleteAllDone={this.deleteAllDone}></TodoFooter>
      </div>
    );
  }
}

export default TodoApp;
