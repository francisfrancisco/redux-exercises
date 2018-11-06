// Create your store here!
import { createStore, combineReducers } from 'redux'
import todosReducer from './reducer'

const rootReducer = combineReducers ({
  todos: todosReducer
})

export default createStore(rootReducer)
