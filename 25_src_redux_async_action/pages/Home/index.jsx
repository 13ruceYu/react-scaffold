import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import HomeNews from './News';
import HomeMessage from './Message'
// import './index.css'

export default class Home extends Component {
  render () {
    return (
      <div className="home-page">
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
        <div className="content-home" style={{ paddingTop: '24px' }}>
          <Switch>
            <Route path="/home/news" component={HomeNews}></Route>
            <Route path="/home/message" component={HomeMessage}></Route>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
