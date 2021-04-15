import React, { Component } from 'react'
import Header from '../Header'
import List from '../List'
import './index.css'

export default class GithubSearchApp extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    err: null
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render () {

    return (
      <div className="github-search-app">
        <div className="container">
          <Header updateAppState={this.updateAppState} />
          <List {...this.state} />
        </div>
      </div>
    )
  }
}
