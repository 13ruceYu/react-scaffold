// 注意！这个不是结构赋值，而是分别暴露。
import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <BrowserRouter>
                <Link className="list-group-item" to="about">about</Link>
                <Link className="list-group-item active" to="home">home</Link>
              </BrowserRouter>
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <h3>???</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}