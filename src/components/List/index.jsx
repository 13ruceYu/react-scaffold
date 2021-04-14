import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render () {
    const { userList, isFirst, isLoading, err } = this.props
    return (
      isFirst ? <h1>欢迎使用！</h1> :
        isLoading ? <h1>加载中...</h1> :
          err ? <h2 style={{ color: 'red' }}>{err}</h2> :
            <div className="user-list">
              <div className="wrap">
                <div className="row">
                  {
                    userList.map(user =>
                      <Item key={user.id} user={user} />
                    )
                  }
                </div>
              </div>
            </div>
    )
  }
}
