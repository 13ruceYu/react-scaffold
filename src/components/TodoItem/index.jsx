import React, { Component } from 'react'
import './index.css'

export default class TodoItem extends Component {
  state = {
    mouseEnter: false
  }

  onMouseEnter = (flag) => {
    return () => {
      this.setState({ mouseEnter: flag })
    }
  }

  onCheckChange = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDeleteClick = (id) => {
    return (e) => {
      this.props.deleteTodo(id)
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
