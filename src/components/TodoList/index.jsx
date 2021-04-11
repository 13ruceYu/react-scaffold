import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import './index.css'

export default class TodoList extends Component {
  render() {
    return (
      <div className='todo-list'>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    )
  }
}
