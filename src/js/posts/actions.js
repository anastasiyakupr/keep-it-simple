import {push} from 'react-router-redux';

import api from 'api';

import {
    POSTS_REQUEST,
    POSTS_SUCCESS
} from './constants';


export const searchPosts = (q = '', page = 0) => (dispatch, getState) => {
    const state = getState().posts.posts;
    const location = {
        pathname: '/posts',
        query: {}
    };

    if (q == '') {
        location.pathname = '/';
    } else {
        location.query.q = q;
    }

    if (page > 0) {
        location.query.page = page;
    }

    dispatch(push(location));

    if (!state.pending && state.q == q && state.page == page) {
        return null;
    }

    dispatch({
        type: POSTS_REQUEST,
        q: q,
        page: page
    });
    return api.searchPosts(q, page).then(
        respose => dispatch({
            type: POSTS_SUCCESS,
            pager: respose
        }));
};