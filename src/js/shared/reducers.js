import {combineReducers} from 'redux';

import {DAILY_QUOTE_SUCCESS} from './constants';


const quote = (state = null, action) => {
    switch (action.type) {
    case DAILY_QUOTE_SUCCESS:
        return Object.assign({}, state, action.quote);
    default:
        return state;
    }
};

export default combineReducers({quote});