import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'
import './index.css'

export default class Header extends Component {

  search = async () => {
    // #region 普通结构赋值 
    // const { keywordEl } = this
    // const { value } = this.keywordEl
    //#endregion
    // 连续结构赋值
    const { keywordEl: { value: keyword } } = this
    PubSub.publish('github', { isFirst: false, isLoading: true })

    // fetch 关注分离 思想
    // fetch better version
    try {
      const response = await fetch(`/api1/search/users?q=${keyword}`)
      const data = await response.json()
      PubSub.publish('github', { isLoading: false, userList: data.items })
      console.log(data)
    } catch (error) {
      console.log('请求出错: ', error)
      PubSub.publish('github', { isLoading: false, err: error })
    }

    // #region fetch simple version
    // fetch(`/api1/search/users?q=${keyword}`).then(
    //   r => {
    //     console.log('连接服务器成功', r)
    //     return r.json()
    //   },
    //   e => {
    //     console.log('联系服务器失败: ', e);
    //     return new Promise(() => { }) // 如果联系服务器失败，则停留在这儿，不继续往下走
    //   }
    // ).then(
    //   r => {
    //     console.log('获取数据成功: ', r)
    //   },
    //   e => {
    //     console.log(e);
    //   }
    // )
    // #endregion

    // #region axios version
    // axios.get(`/api1/search/users?q=${keyword}`).then(
    //   r => {
    //     PubSub.publish('github', { isLoading: false, userList: r.data.items })
    //   },
    //   e => {
    //     PubSub.publish('github', { isLoading: false, err: e.message })
    //   }
    // )
    // #endregion
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
