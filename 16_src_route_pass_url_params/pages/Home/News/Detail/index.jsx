import React, { Component } from 'react'

const NewsDetailList = [
  { id: '1', content: 'hola china' },
  { id: '2', content: 'hola world' },
  { id: '3', content: 'hola universe' }
]

export default class Detail extends Component {
  render () {
    console.log(this.props)
    // param 传过的属性值都为 string
    const { id, title } = this.props.match.params
    const detail = NewsDetailList.find(item => item.id === id)
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {detail.content}</li>
      </ul>
    )
  }
}
