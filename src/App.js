// 注意！这个不是结构赋值，而是分别暴露。
import React, {Component} from 'react'
import TodoApp from './components/TodoApp'
import './global.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <TodoApp></TodoApp>
      </div>
    )
  }
}