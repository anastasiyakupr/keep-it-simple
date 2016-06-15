import {push} from 'react-router-redux';

import api from './api/mock';

import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE
} from './constants';


export const signin = credentials => dispatch => {
    dispatch({type: SIGN_IN_REQUEST});
    return api.signin(credentials).then(
        user => {
            dispatch({
                type: SIGN_IN_SUCCESS,
                user: user
            });
            dispatch(push('/'));
        },
        errors => dispatch({
            type: SIGN_IN_FAILURE,
            errors: errors
        }));
};

export const signout = () => dispatch => {
    dispatch({type: SIGN_OUT_REQUEST});
    return api.signout().then(
        () => {
            dispatch({
                type: SIGN_OUT_SUCCESS
            });
            dispatch(push('/'));
        },
        errors => dispatch({
            type: SIGN_OUT_FAILURE,
            errors: errors
        }));
};