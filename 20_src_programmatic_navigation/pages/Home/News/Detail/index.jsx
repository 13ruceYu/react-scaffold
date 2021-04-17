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
    const { id, title } = this.props.match.params

    // 接受 search param 传过来的值，需要自己解析一下
    // const { search } = this.props.location
    // const { id, title } = qs.parse(search.slice(1))

    // 接受 state param 传过的参数
    // const { id, title } = this.props.location.state || {}

    // ⚠️ 关于刷新能否留住信息：三者都可以，因为我们最外层是通过 BrowserRouter 包裹的，本质上都是在维护 history 这个属性，state 里的信息在 history 有保留，
    // ⚠️ 但要注意，注册路由时，必须要用 switch 包裹，否则刷新时 history 里的 location 还是会被重置

    const detail = NewsDetailList.find(item => item.id === id) || {}

    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {detail.content}</li>
      </ul>
    )
  }
}
