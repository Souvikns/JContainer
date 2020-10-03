import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import container from './reducers/containers'

const store = createStore(combineReducers({
    container
}), applyMiddleware(thunk))

export default store