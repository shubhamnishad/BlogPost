import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { blogReducer } from './reducers';

const defaultStore = {
  blogs: []
};
const rootReducer = combineReducers({ blogs: blogReducer });
export const store = createStore(
  rootReducer,
  composeWithDevTools()
);
