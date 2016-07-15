import {combineReducers} from 'redux';
import {LOCATION_CHANGE} from 'react-router-redux';

import {
    SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    SIGN_OUT_REQUEST
} from './constants';


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
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
        return Object.assign({}, state, {
            pending: true
        });
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
        return Object.assign({}, state, {
            pending: false,
            errors: {},
            user: action.user
        });
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
        return Object.assign({}, state, {
            pending: false,
            errors: action.errors
        });
    case SIGN_OUT_REQUEST:
        return Object.assign({}, state, initialAuthState);
    default:
        return state;
    }
};

export default combineReducers({auth});