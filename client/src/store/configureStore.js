import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import itemsReducer from '../reducer/itemsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      item: itemsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};