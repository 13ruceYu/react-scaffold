import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class TodoFooter extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateAllDone: PropTypes.func.isRequired,
    deleteAllDone: PropTypes.func.isRequired
  }

  handleCheckAll = (e) => {
    this.props.updateAllDone(e.target.checked)
  }

  render () {
    const { todos, deleteAllDone } = this.props
    const doneCount = todos.reduce((prev, todo) => prev + (todo.done ? 1 : 0), 0)
    console.log(doneCount)
    const totalCount = todos.length
    return (
      <div className="todo-footer">
        <input type="checkbox" checked={doneCount === totalCount && totalCount !== 0 ? true : false} onChange={this.handleCheckAll} />
        <span className="info-count">已完成 {doneCount} / 全部 {totalCount}</span>
        <button className="btn btn-danger" onClick={deleteAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
