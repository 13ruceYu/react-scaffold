// 创建用于传递事件的 actions，object 类型的同步 action

import { INCREMENT, DECREMENT } from './constants'

const incrementCount = data => {
  return { type: INCREMENT, data }
}

const decrementCount = data => ({ type: DECREMENT, data })

export { incrementCount, decrementCount }