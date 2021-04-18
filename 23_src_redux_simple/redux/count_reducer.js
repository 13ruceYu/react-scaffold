/*
  为 Count 组件服务的 reducer
*/
const initState = 10
export default function countReducer (preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}