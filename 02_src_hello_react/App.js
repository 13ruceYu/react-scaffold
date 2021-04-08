// 注意！这个不是结构赋值，而是分别暴露。
import React, {Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome'

export default class App extends Component {
  render () {
    return (
      <div>
        <Hello></Hello>
        <Welcome></Welcome>
      </div>
    )
  }
}