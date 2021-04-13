// 注意！这个不是结构赋值，而是分别暴露。
import React, { Component } from 'react'
import axios from 'axios'
import './global.css'

export default class App extends Component {

  getData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      r => {
        console.log(r.data);
      },
      e => {
        console.log(e);
      }
    )
  }

  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      r => {
        console.log(r.data);
      },
      e => {
        console.log(e);
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.getData}>get data</button>
        <button onClick={this.getCarData}>get car data</button>
      </div>
    )
  }
}