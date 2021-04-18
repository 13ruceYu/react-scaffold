// 引入 createStore，专门创建 redux 中最为核心的 store 对象
import { createStore, applyMiddleware } from 'redux'
// 引入为 ReduxCount 组件服务的 reducer
import countReducer from './count_reducer'
// 引入 redux-thunk 模块，用于支持 async action
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))