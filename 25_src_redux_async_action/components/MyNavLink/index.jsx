import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render () {
    return (
      // 组件标签内容其实可以通过组件的 props 传过来
      <NavLink {...this.props} />
    )
  }
}
