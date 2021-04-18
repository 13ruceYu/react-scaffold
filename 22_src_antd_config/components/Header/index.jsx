import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' // 用于加工一般组件，使其具有路由组件的所有 api

class Header extends Component {

  nextRoute = () => {
    this.props.history.goForward()
  }

  prevRoute = () => {
    this.props.history.goBack()
  }

  render () {
    return (
      <div>
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demooooooo</h2></div>
          <button onClick={this.prevRoute} style={{ margin: '0 10px' }} type="button" className="btn btn-outline-secondary btn-sm">Prev</button>
          <button onClick={this.nextRoute} type="button" className="btn btn-outline-secondary btn-sm">Next</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
