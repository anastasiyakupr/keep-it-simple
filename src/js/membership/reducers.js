import {combineReducers} from 'redux';
import {LOCATION_CHANGE} from 'react-router-redux';

import * as types from './constants';


const initialAuthState = {
    pending: false,
    errors: {},
    user: null
};

const auth = (state = initialAuthState, action) => {
    switch (action.type) {
    case LOCATION_CHANGE:
        return Object.assign({}, state, {
            errors: {}
        });
    case types.SIGN_IN_REQUEST:
    case types.SIGN_UP_REQUEST:
        return Object.assign({}, state, {
            pending: true
        });
    case types.SIGN_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
        return Object.assign({}, {
            pending: false,
            errors: {},
            user: action.user
        });
    case types.SIGN_IN_FAILURE:
    case types.SIGN_UP_FAILURE:
        return Object.assign({}, {
            pending: false,
            errors: action.errors,
            user: null
        });
    case types.SIGN_OUT_REQUEST:
        return Object.assign({}, initialAuthState);
    default:
        return state;
    }
};

export default combineReducers({auth});