import {combineReducers} from 'redux';

import {
    POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE,
    POST_REQUEST, POST_SUCCESS, POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from './constants';

const initialPostsState = {
    q: null,
    page: 0,
    pending: false,
    pager: {
        items: []
    }
};

const posts = (state = initialPostsState, action) => {
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

const initialPostState = {
    pending: false,
    slug: null,
    post: {
        author: {},
        permissions: {}
    },
    errors: {}
};

const post = (state = initialPostState, action) => {
    switch (action.type) {
    case POST_REQUEST:
        return Object.assign({}, state, initialPostState, {
            pending: true,
            slug: action.slug
        });
    case POST_SUCCESS:
        return Object.assign({}, state, {
            pending: false,
            post: action.post
        });
    case POST_FAILURE:
        return Object.assign({}, state, {
            pending: false
        });
    case ADD_COMMENT_REQUEST:
        return Object.assign({}, state, {
            pending: true
        });
    case ADD_COMMENT_SUCCESS:
        return Object.assign({}, state, {
            pending: false
        });
    case ADD_COMMENT_FAILURE:
        return Object.assign({}, state, {
            pending: false
        });
    default:
        return state;
    }
};

export default combineReducers({posts, post});