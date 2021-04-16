import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render () {
    console.log(this.props)
    return (
      // 组件标签内容其实可以通过组件的 props 传过来
      <NavLink activeClassName="custom-active" className="list-group-item" {...this.props} />
    )
  }
}
