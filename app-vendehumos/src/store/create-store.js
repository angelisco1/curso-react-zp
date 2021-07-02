import { createStore, combineReducers, applyMiddleware } from 'redux'
import vendehumos from './vendehumos'
import thunk from 'redux-thunk'

export default function getStore() {
  const appReducer = combineReducers({
    vendehumos,
    // usuarios
  })
  return createStore(appReducer, applyMiddleware(thunk))
}