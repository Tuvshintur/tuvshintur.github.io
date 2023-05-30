import { combineReducers } from 'redux';
import { postReducer } from './post';
import { authReducer } from './auth';

export const reducers = combineReducers({ post: postReducer, auth: authReducer });
