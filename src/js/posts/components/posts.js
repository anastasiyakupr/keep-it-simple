import React from 'react';

import Layout from '../../shared/components/layout';
import SignUpWell from '../../shared/components/signup-well';
import SearchPostsWell from './search-posts-well';
import PostItem from './post-item';


class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {onSearch} = this.props;

        if (onSearch) {
            const {q = '', page = 0} = this.props.location.query;

            onSearch(q, parseInt(page));
        }
    }

    render() {
        const {q, pending, pager, user, onSearch, onItem} = this.props;
        const sidebar = (
            <div>
                <SearchPostsWell q={q} pending={pending}
                                 onSubmit={onSearch} />
                <SignUpWell user={user} />
            </div>
        );

        return (
            <Layout sidebar={sidebar}>
                <h1>
                    Keep It Simple <small>Welcome</small>
                </h1>
                {
                    pager.items.map((p, i) =>
                        <PostItem key={i} item={p} onClick={onItem} />)
                }
            </Layout>
        );
    }
}

Posts.propTypes = {
    location: React.PropTypes.shape({
        query: React.PropTypes.shape({
            q: React.PropTypes.string,
            page: React.PropTypes.string
        })
    }),
    q: React.PropTypes.string,
    pending: React.PropTypes.bool.isRequired,
    pager: React.PropTypes.shape({
        items: React.PropTypes.array
    }),
    user: React.PropTypes.object,
    onSearch: React.PropTypes.func,
    onItem: React.PropTypes.func
};

export default Posts;