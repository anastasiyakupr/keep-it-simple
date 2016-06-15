import {combineReducers} from 'redux';

import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_REQUEST
} from './constants';

const initialAuthState = {
    pending: false,
    errors: {},
    user: null
};

const auth = (state = initialAuthState, action) => {
    switch (action.type) {
    case SIGN_IN_REQUEST:
        return Object.assign({}, state, {
            pending: true
        });
    case SIGN_IN_SUCCESS:
        return Object.assign({}, state, {
            pending: false,
            errors: {},
            user: action.user
        });
    case SIGN_IN_FAILURE:
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