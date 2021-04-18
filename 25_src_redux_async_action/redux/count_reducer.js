/*
  为 Count 组件服务的 reducer
*/
import { INCREMENT, DECREMENT } from './constants'

const initState = 10
export default function countReducer (preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}