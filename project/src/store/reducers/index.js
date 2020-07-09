import { combineReducers } from 'redux';
import { postReducer } from './post';

export const reducers = combineReducers({ post: postReducer });
