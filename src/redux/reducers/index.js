import { combineReducers } from 'redux';
import counter from './counter';
import errors from './errors';

export default combineReducers({
    counter,
    errors
});
