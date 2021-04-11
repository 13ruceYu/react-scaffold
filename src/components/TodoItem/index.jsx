import React, { Component } from 'react'
import './index.css'

export default class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox"/>
        <span className="todo-item_title">学习</span>
      </div>
    )
  }
}
