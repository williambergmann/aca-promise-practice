import { combineReducers } from 'redux'

const users = (state = [], action) => {
  if (action.type === 'SET_USERS') {
    return state.concat(action.value)
  }
  return state
}

export default combineReducers({ users })