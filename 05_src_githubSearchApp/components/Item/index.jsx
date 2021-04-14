import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render () {
    const { user } = this.props
    return (
      <div className="item col col-2">
        <a href={user.html_url}>
          <div className="avatar">
            <img src={user.avatar_url} alt="avatar-img" />
          </div>
          <div className="username">
            {user.login}
          </div>
        </a>
      </div>
    )
  }
}
