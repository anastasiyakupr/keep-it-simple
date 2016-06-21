import {combineReducers} from 'redux';

import {
    POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE
} from './constants';

const initialItemsState = {
    q: null,
    page: 0,
    pending: false,
    pager: {
        items: []
    }
};

const posts = (state = initialItemsState, action) => {
    switch (action.type) {
    case POSTS_REQUEST:
        return Object.assign({}, state, {
            pending: true,
            q: action.q,
            page: action.page
        });
    case POSTS_SUCCESS:
        return Object.assign({}, state, {
            pending: false,
            pager: action.pager
        });
    case POSTS_FAILURE:
        return Object.assign({}, state, {
            pending: false
        });
    default:
        return state;
    }
};

export default combineReducers({posts});