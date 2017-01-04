import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import profileReducer from '../reducers/profile';

const reducers = combineReducers({
  profileReducer
});

const loggerMiddleware = createLogger();

const appStore = createStore(
  reducers, 
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
) 

export default appStore;