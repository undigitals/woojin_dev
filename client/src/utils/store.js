import { createStore, compose, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import rootReducer from '../redux/reducers'

const enhancers = compose(
	typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
		? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		: f => f
)

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(
	createStore
)

export default initialState =>
	createStoreWithMiddleware(rootReducer, initialState, enhancers)
