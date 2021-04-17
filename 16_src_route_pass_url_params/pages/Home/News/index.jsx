import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class HomeNews extends Component {
  state = {
    newsList: [
      { id: 1, title: 'news-1' },
      { id: 2, title: 'news-2' },
      { id: 3, title: 'news-3' },
    ]
  }
  render () {
    const { newsList } = this.state
    return (
      <div>
        <ul className="news-list">
          {
            newsList.map(news =>
              <li key={news.id}>
                <Link to={`/home/news/detail/${news.id}/${news.title}`}>{news.title}</Link>
              </li>
            )
          }
        </ul>
        <hr />
        <div className="news-detail">
          {/* 注册路由，并接受 params 参数 */}
          <Route path="/home/news/detail/:id/:title" component={Detail}></Route>
        </div>
      </div>
    )
  }
}
