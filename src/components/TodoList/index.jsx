import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import './index.css'

export default class TodoList extends Component {
  render () {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className='todo-list'>
        {
          todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}
