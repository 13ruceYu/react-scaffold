import React, { Component } from 'react'
import Header from '../Header'
import List from '../List'
import './index.css'

export default class GithubSearchApp extends Component {

  render () {
    return (
      <div className="github-search-app">
        <div className="container">
          <Header />
          <List />
        </div>
      </div>
    )
  }
}
