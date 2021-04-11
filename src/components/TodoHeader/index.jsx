import React, { Component } from 'react'
import './index.css'

export default class TodoHeader extends Component {
  render() {
    return (
      <div className="todo-input">
        <input type="text" placeholder="按回车键确认"/>
      </div>
    )
  }
}
