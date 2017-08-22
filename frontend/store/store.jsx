import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import sessionReducer from '../reducers/session_reducer';

const configureStore = () => {
  return createStore(
    sessionReducer,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
