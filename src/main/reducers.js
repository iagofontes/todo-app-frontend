import { combineReducers } from 'redux'

import TodoReducer from '../todo/todoReducer'

const rootReducers = combineReducers({
    todo: TodoReducer
})

export default rootReducers