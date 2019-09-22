import counter from './reducers/counter';
import { createStore, combineReducers } from 'redux'

export default createStore(
  combineReducers({
    counter
  })
)
