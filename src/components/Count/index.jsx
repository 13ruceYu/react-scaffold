import React, { Component } from 'react'
import { Button, Select } from 'antd'

const { Option } = Select

export default class Count extends Component {
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
    console.log(this.props);
  }

  decrement = () => {
    const { num } = this.state
  }

  oddIncrement = () => {
    const { num } = this.state
  }

  asyncIncrement = () => {
    const { num } = this.state
  }

  render () {
    return (
      <div>
        <h2>当前值为：{ }</h2>
        <Select style={{ width: '100px' }} onChange={this.handleSelectChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <Button style={{ margin: '0 6px' }} onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button style={{ margin: '0 6px' }} onClick={this.oddIncrement}>结果为偶数再加</Button>
        <Button onClick={this.asyncIncrement}>等 1s 加</Button>
      </div>
    )
  }
}
