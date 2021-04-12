import React, { Component } from 'react';
import TodoHeader from '../TodoHeader'
import TodoList from '../TodoList'
import TodoFooter from '../TodoFooter'
import './index.css';

class TodoApp extends Component {
  render() {
    return (
      <div className="todo-app">
        <TodoHeader></TodoHeader>
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
      </div>
    );
  }
}

export default TodoApp;
