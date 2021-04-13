import React, { Component } from 'react'
import './index.css'

export default class TodoFooter extends Component {
  handleCheckboxClick = (e) => {
    this.props.updateAllDone(e.target.checked)
  }

  render () {
    const { todos } = this.props
    const checkedTodos = todos.filter(todo => todo.done === true)
    return (
      <div className="todo-footer">
        <input type="checkbox" onChange={this.handleCheckboxClick} />
        <span className="info-count">已完成 {checkedTodos.length} / 全部 {todos.length}</span>
        <button className="btn btn-danger" onClick={this.props.deleteAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
