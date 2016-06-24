import {connect} from 'react-redux';

import {searchPosts, getPost} from '../actions';
import Posts from '../components/posts';


export default connect(
    state => {
        const posts = state.posts.posts;

        return {
            q: posts.q,
            pending: posts.pending,
            pager: posts.pager,
            user: state.membership.auth.user
        };
    },
    dispatch => ({
        onSearch: (q, page) => dispatch(searchPosts(q, page)),
        onItem: slug => dispatch(getPost(slug))
    })
)(Posts);