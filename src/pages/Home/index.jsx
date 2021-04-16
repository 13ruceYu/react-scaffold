import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import HomeNews from './News';
import HomeMessage from './Message'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2 style={{ marginTop: '0px' }}>Home page</h2>
        <div className="nav-home">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <MyNavLink className="nav-link" to="/home/news">News</MyNavLink>
            </li>
            <li className="nav-item">
              <MyNavLink className="nav-link" to="/home/message">Message</MyNavLink>
            </li>
          </ul>
        </div>
        <div className="content-home">
          <Route path="/home/news" component={HomeNews}></Route>
          <Route path="/home/message" component={HomeMessage}></Route>
        </div>
      </div>
    )
  }
}
