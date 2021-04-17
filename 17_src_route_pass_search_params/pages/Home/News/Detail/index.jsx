import React, { Component } from 'react'
import qs from 'querystring'

let obj = { name: 'tom', age: 18 } // name=tom&age=18 -> key=value&key=value -> 👻 urlEncoded 编码的字符串
console.log(qs.stringify(obj))

const NewsDetailList = [
  { id: '1', content: 'hola china' },
  { id: '2', content: 'hola world' },
  { id: '3', content: 'hola universe' }
]

export default class Detail extends Component {
  render () {
    console.log(this.props)
    // 接受 url param 传过的属性值都为 string
    // const { id, title } = this.props.match.params

    // 接受 search param 传过来的值，需要自己解析一下
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))

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
