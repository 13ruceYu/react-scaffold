import React, { Component } from 'react'

export default class HomeNews extends Component {
  state = {
    newsList: [
      { id: 1, title: 'news-1' },
      { id: 2, title: 'news-2' },
      { id: 3, title: 'news-3' },
    ]
  }
  render () {
    return (
      <div>
        <ul>
          <li><a href="/xxx">new-1</a></li>
        </ul>
      </div>
    )
  }
}
