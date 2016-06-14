import api from './api/mock';

import {
    DAILY_QUOTE_REQUEST,
    DAILY_QUOTE_SUCCESS
} from './constants';


export const dailyQuote = () => dispatch => {
    dispatch({type: DAILY_QUOTE_REQUEST});
    return api.dailyQuote().then(
        respose => dispatch({
            type: DAILY_QUOTE_SUCCESS,
            quote: respose
        }));
};