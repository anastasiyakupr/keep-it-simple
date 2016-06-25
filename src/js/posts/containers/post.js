import {connect} from 'react-redux';

import {getPost} from '../actions';
import Post from '../components/post';


export default connect(
    state => {
        const post = state.posts.post;

        return {
            pending: post.pending,
            post: post.post,
            errors: post.errors,
            authenticated: !!state.membership.auth.user
        };
    },
    dispatch => ({
        onGetPost: slug => dispatch(getPost(slug))
        // onComment: message => dispatch(addComment(message))
    })
)(Post);