import api from './api/mock';

import {
    DAILY_QUOTE_REQUEST,
    DAILY_QUOTE_SUCCESS,
    SIGN_OUT
} from './constants';


export function signout() {
    return {type: SIGN_OUT};
}

export function dailyQuote() {
    return dispatch => {
        dispatch({type: DAILY_QUOTE_REQUEST});
        return api.dailyQuote().then(respose => dispatch({
            type: DAILY_QUOTE_SUCCESS,
            quote: respose
        }));
    };
}