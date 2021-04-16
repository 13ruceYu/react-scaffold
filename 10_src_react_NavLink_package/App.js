// 注意！这个不是结构赋值，而是分别暴露。
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home' // 路由组件
import About from './pages/About' // 路由组件
import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink' // 封装后的 NavLink

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* React 中靠路由链接实现组建的切换 */}
              {/* NavLink 相较于普通的 Link，会自动给选中的 NavLink 的 className 添加一个 active 的默认值 */}
              {/* 如果想自己指定选中时添加的 className 值，可以使用 activeClassName 属性，如果设置属性，则默认 active 值将失效 */}
              <MyNavLink to="home">Home</MyNavLink>
              <MyNavLink to="about">About</MyNavLink>

              {/* 原生 HTML 中靠 a 标签跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}