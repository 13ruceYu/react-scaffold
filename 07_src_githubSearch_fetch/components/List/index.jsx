import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'

export default class List extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    err: null
  }

  componentDidMount () {
    this.token = PubSub.subscribe('github', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount () {
    PubSub.unsubscribe(this.token)
  }

  render () {
    const { userList, isFirst, isLoading, err } = this.state
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
