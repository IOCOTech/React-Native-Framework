import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './RootReducer';

const log = createLogger({diff: true, collapsed: true});

// Middleware configuration
const middleware = [thunk];
//store Enhancers
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

export default configureStore;
