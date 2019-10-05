import {push} from 'react-router-redux';

import api from 'api';

import {
    SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE
} from './constants';


export const signin = credentials => dispatch => {
    dispatch({type: SIGN_IN_REQUEST});
    return api.signin(credentials).then(
        response => {
            dispatch({type: SIGN_IN_SUCCESS, user: response});
            dispatch(push('/'));
        },
        errors => dispatch({type: SIGN_IN_FAILURE, errors: errors})
    );
};

export const signup = model => dispatch => {
    dispatch({type: SIGN_UP_REQUEST});
    return api.signup(model).then(
        response => {
            dispatch({type: SIGN_UP_SUCCESS, user: response});
            dispatch({type: SIGN_IN_SUCCESS, user: response});
            dispatch(push('/'));
        },
        errors => dispatch({type: SIGN_UP_FAILURE, errors: errors})
    );
};

export const signout = () => dispatch => {
    dispatch({type: SIGN_OUT_REQUEST});
    return api.signout().then(
        () => {
            dispatch({type: SIGN_OUT_SUCCESS});
            dispatch(push('/'));
        },
        errors => dispatch({type: SIGN_OUT_FAILURE, errors: errors})
    );
};
