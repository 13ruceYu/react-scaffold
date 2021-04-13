import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class TodoItem extends Component {
  state = {
    mouseEnter: false
  }

  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
  }

  onMouseEnter = (flag) => {
    return () => {
      this.setState({ mouseEnter: flag })
    }
  }

  // 点击 checkbox 事件
  onCheckChange = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  // 删除 todo
  handleDeleteClick = (id) => {
    return (e) => {
      if (window.confirm('确定删除吗？')) {
        this.props.deleteTodo(id)
      }
    }
  }

  render () {
    const { todo } = this.props
    const { mouseEnter } = this.state
    return (
      <li style={{ backgroundColor: mouseEnter ? '#f1f1f1' : 'white' }} className="todo-item" onMouseEnter={this.onMouseEnter(true)} onMouseLeave={this.onMouseEnter(false)}>
        <input type="checkbox" checked={todo.done} onChange={this.onCheckChange(todo.id)} />
        <span className="todo-item_title">{todo.title}</span>
        <button className="btn btn-danger" style={{ display: mouseEnter ? 'block' : 'none' }} onClick={this.handleDeleteClick(todo.id)}>删除</button>
      </li>
    )
  }
}
