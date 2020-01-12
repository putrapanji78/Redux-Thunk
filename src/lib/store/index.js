import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducers from '../reducers/RootReducer'

const store = createStore(RootReducers, applyMiddleware(thunk))
export default store;