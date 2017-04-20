import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../shared/components/layout';
import SignUpWell from '../../shared/components/signup-well';
import Paging from '../../shared/components/paging';
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
                <Paging pending={pending}
                        paging={pager.paging}
                        onSelect={page => onSearch(q, page)} />
            </Layout>
        );
    }
}

Posts.propTypes = {
    location: PropTypes.shape({
        query: PropTypes.shape({
            q: PropTypes.string,
            page: PropTypes.string
        })
    }),
    q: PropTypes.string,
    pending: PropTypes.bool.isRequired,
    pager: PropTypes.shape({
        items: PropTypes.array,
        paging: PropTypes.shape({
            before: PropTypes.number,
            after: PropTypes.number
        })
    }),
    user: PropTypes.object,
    onSearch: PropTypes.func,
    onItem: PropTypes.func
};

export default Posts;