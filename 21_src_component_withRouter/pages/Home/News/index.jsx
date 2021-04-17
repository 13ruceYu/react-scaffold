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

  // 编程式路由导航
  routeReplace = (id, title) => {
    return () => {
      this.props.history.replace(`/home/news/detail/${id}/${title}`)
    }
  }

  nextRoute = () => {
    this.props.history.goForward()
  }

  prevRoute = () => {
    this.props.history.goBack()
  }

  render () {
    const { newsList } = this.state
    return (
      <div>
        <ul className="news-list">
          {
            newsList.map(news =>
              <li key={news.id} style={{ marginBottom: '10px' }}>
                {/* 路由传参三问：怎么带？怎么传？怎么收？ */}
                {/* url params */}
                <Link to={`/home/news/detail/${news.id}/${news.title}`}>{news.title}</Link>
                {/* search params */}
                {/* <Link to={`/home/news/detail/?id=${news.id}&title=${news.title}`}>{news.title}</Link> */}
                {/* state params */}
                {/* <Link to={{ pathname: '/home/news/detail', state: { id: news.id, title: news.title } }}>{news.title}</Link> */}
                <button style={{ margin: '0 10px' }} type="button" className="btn btn-outline-success btn-sm">Push 查看</button>
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.routeReplace(news.id, news.title)}>Replace 查看</button>
              </li>
            )
          }
        </ul>
        <hr />
        <div className="news-detail">
          {/* 注册路由，并声明接受 url params */}
          <Route path="/home/news/detail/:id/:title" component={Detail}></Route>
          {/* 接受 search params，正常注册路由即可 */}
          {/* <Route path="/home/news/detail" component={Detail}></Route> */}
          {/* 接受 state params，正常注册路由即可 */}
          {/* <Route path="/home/news/detail" component={Detail}></Route> */}
          <button onClick={this.prevRoute} style={{ margin: '0 10px' }} type="button" className="btn btn-outline-secondary btn-sm">Prev</button>
          <button onClick={this.nextRoute} type="button" className="btn btn-outline-secondary btn-sm">Next</button>
        </div>
      </div>
    )
  }
}
