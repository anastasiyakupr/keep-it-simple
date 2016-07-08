import {push} from 'react-router-redux';

import api from 'api';

import {
    POSTS_REQUEST,
    POSTS_SUCCESS,
    POST_REQUEST,
    POST_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS
} from './constants';


export const searchPosts = (q = '', page = 0) => (dispatch, getState) => {
    const state = getState();
    const locationBeforeTransitions = state.routing.locationBeforeTransitions;
    const posts = state.posts.posts;
    const location = {query: {}};

    if (q == '') {
        location.pathname = '/';
    } else {
        location.pathname = '/posts';
        location.query.q = q;
    }

    if (page > 0) {
        location.query.page = page;
    }

    if (location.pathname != locationBeforeTransitions.pathname ||
            location.query.q != locationBeforeTransitions.query.q ||
            location.query.page != locationBeforeTransitions.query.page) {
        dispatch(push(location));
    }

    if (posts.pending || posts.q == q && posts.page == page) {
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

export const getPost = slug => (dispatch, getState) => {
    const post = getState().posts.post;
    const pathname = '/post/' + slug;

    const navigate = () => {
        const routing = getState().routing;

        if (pathname !== routing.locationBeforeTransitions.pathname) {
            dispatch(push(pathname));
        }
    };

    if (post.pending || post.slug === slug) {
        navigate();
        return null;
    }

    dispatch({
        type: POST_REQUEST,
        slug: slug
    });
    return api.getPost(slug).then(
        respose => {
            dispatch({
                type: POST_SUCCESS,
                post: respose
            });
            navigate();
        });
};

export const addComment = comment => dispatch => {
    if (!comment) {
        return null;
    }

    dispatch({
        type: ADD_COMMENT_REQUEST,
        comment: comment
    });
    return api.addComment(comment).then(
        () => {
            dispatch({
                type: ADD_COMMENT_SUCCESS
            });
        });
};