import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import './index.css'

export default class Header extends Component {

  search = () => {
    // const { keywordEl } = this
    // const { value } = this.keywordEl
    // 连续结构赋值
    const { keywordEl: { value: keyword } } = this
    PubSub.publish('github', { isFirst: false, isLoading: true })
    axios.get(`/api1/search/users?q=${keyword}`).then(
      r => {
        PubSub.publish('github', { isLoading: false, userList: r.data.items })
      },
      e => {
        PubSub.publish('github', { isLoading: false, err: e.message })
      }
    )
  }

  render () {
    return (
      <div className="header">
        <div className="wrap">
          <div className="logo">Github User Search</div>
          <div className="search-input">
            <input ref={el => this.keywordEl = el} type="text" />
            <button onClick={this.search}>搜索</button>
          </div>
        </div>
      </div>
    )
  }
}
