import {connect} from 'react-redux';

import {getPost} from '../actions';
import Post from '../components/post';


export default connect(
    state => {
        const post = state.posts.post;

        return {
            pending: post.pending,
            post: post.post
        };
    },
    dispatch => ({
        onGetPost: slug => dispatch(getPost(slug))
    })
)(Post);