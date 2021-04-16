import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import HomeNews from './News';
import HomeMessage from './Message'

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className="nav-home">
          <MyNavLink to="/home/news">News</MyNavLink>
          <MyNavLink to="/home/message">Message</MyNavLink>
        </div>
        <div className="content-home">
          <Route path="/home/news" component={HomeNews}></Route>
          <Route path="/home/message" component={HomeMessage}></Route>
        </div>
      </div>
    )
  }
}
