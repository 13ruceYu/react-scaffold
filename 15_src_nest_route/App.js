// 注意！这个不是结构赋值，而是分别暴露。
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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
              <MyNavLink to="/home/fuzzy">Home</MyNavLink>
              <MyNavLink to="/about">About</MyNavLink>

              {/* 原生 HTML 中靠 a 标签跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 通过 switch 组件的包裹，可以让路由一但匹配到正确的组件就停止匹配 */}
                <Switch>
                  {/* 注册路由 */}
                  {/* 观察 css 文件的请求，发现丢失了 */}
                  {/* fuzzy matching 只能多不能少 */}
                  <Route path="/home" component={Home}></Route>
                  {/* exact matching 只能一模一样 */}
                  <Route exact path="/about" component={About}></Route>
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}