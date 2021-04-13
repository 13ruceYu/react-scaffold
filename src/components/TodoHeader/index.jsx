import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class TodoHeader extends Component {

  // 对接收的 props 进行：类型 & 必要性的限制。
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (e) => {
    const { keyCode, target } = e
    let value = target.value
    if (keyCode !== 13 || value.trim() === '') {
      return
    }
    let todo = {
      id: nanoid(),
      title: value,
      done: false
    }
    target.value = ''
    this.props.addTodo(todo)
  }
  render () {
    return (
      <div className="todo-input">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="按回车键确认" />
      </div>
    )
  }
}
