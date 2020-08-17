import { combineReducers } from 'redux';

import userReducer from './auth';

const reducers = combineReducers({userReducer});

export default reducers;