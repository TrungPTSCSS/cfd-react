import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "./reducer/authReducer";


const reducer = combineReducers({
    auth: authReducer
})

const thunk = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch)
    } else {
        next(action)
    }
}
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(reducer, applyMiddleware(thunk))

export default store