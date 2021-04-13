import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import './index.css'

export default class TodoList extends Component {

  // 对接收的 props 进行：类型 & 必要性的限制。
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

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
