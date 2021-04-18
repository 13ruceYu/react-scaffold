import React, { Component } from 'react'
import { Button, Select } from 'antd'
import store from '../../redux/store'
import { incrementCount, decrementCount } from '../../redux/count_actions'

const { Option } = Select

export default class ReduxCount extends Component {
  state = {
    num: 0
  }

  // 数据更新，但是没有触发 render，所有需要 store subscribe 一下，为方便后续使用，subscribe 可以放到根目录
  // componentDidMount () {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  handleSelectChange = (params) => {
    this.setState({ num: parseInt(params) })
  }

  increment = () => {
    const { num } = this.state
    store.dispatch(incrementCount(num))
  }

  decrement = () => {
    const { num } = this.state
    store.dispatch(decrementCount(num))
  }

  oddIncrement = () => {
    const { num } = this.state
    if (store.getState() % 2 === 0) {
      store.dispatch(incrementCount(num))
    }
  }

  asyncIncrement = () => {
    const { num } = this.state
    setTimeout(() => {
      store.dispatch(incrementCount(num))
    }, 1000);
  }

  render () {
    return (
      <div>
        <h2>当前值为：{store.getState()}</h2>
        <Select style={{ width: '100px' }} onChange={this.handleSelectChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.oddIncrement}>结果为偶数再加</Button>
        <Button onClick={this.asyncIncrement}>等 1s 加</Button>
      </div>
    )
  }
}
