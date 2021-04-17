import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class HomeNews extends Component {
  state = {
    newsList: [
      { id: '1', title: 'news-1' },
      { id: '2', title: 'news-2' },
      { id: '3', title: 'news-3' },
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
                {/* 路由传参三问：怎么带？怎么传？怎么收？ */}
                {/* url params */}
                {/* <Link to={`/home/news/detail/${news.id}/${news.title}`}>{news.title}</Link> */}
                {/* search params */}
                {/* <Link to={`/home/news/detail/?id=${news.id}&title=${news.title}`}>{news.title}</Link> */}
                {/* state params */}
                <Link replace to={{ pathname: '/home/news/detail', state: { id: news.id, title: news.title } }}>{news.title}</Link>
              </li>
            )
          }
        </ul>
        <hr />
        <div className="news-detail">
          {/* 注册路由，并声明接受 url params */}
          {/* <Route path="/home/news/detail/:id/:title" component={Detail}></Route> */}
          {/* 接受 search params，正常注册路由即可 */}
          {/* <Route path="/home/news/detail" component={Detail}></Route> */}
          {/* 接受 state params，正常注册路由即可 */}
          <Route path="/home/news/detail" component={Detail}></Route>
        </div>
      </div>
    )
  }
}
