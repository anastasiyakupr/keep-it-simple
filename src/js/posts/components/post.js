import React from 'react';
import {Glyphicon} from 'react-bootstrap';

import Layout from '../../shared/components/layout';
import LeadBreak from '../../shared/components/lead-break';
import {formatDateOrTime} from '../../shared/utils';

import CommentWell from './comment-well';
import Comments from './comments';


class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.onGetPost) {
            this.props.onGetPost(this.props.routeParams.slug);
        }
    }

    render() {
        const {
            pending, post, authenticated, errors, onAddComment
        } = this.props;
        const permitted = post.permissions && post.permissions.create_comment;

        return (
            <Layout>
                <article>
                    <h1>{post.title}</h1>
                    <p className="lead">
                        by {post.author.first_name} {post.author.last_name}
                    </p>
                    <hr/>
                    <p>
                        <Glyphicon glyph="time" /> Posted {
                            formatDateOrTime(post.created_on)
                        }
                    </p>
                    <hr/>
                    <LeadBreak text={post.message} />
                </article>
                <hr/>
                <CommentWell authenticated={authenticated}
                             permitted={permitted}
                             disabled={pending}
                             errors={errors}
                             onSubmit={onAddComment} />
                <Comments items={post.comments} />
            </Layout>
        );
    }
}

Post.propTypes = {
    pending: React.PropTypes.bool,
    post: React.PropTypes.shape({
        title: React.PropTypes.string,
        author: React.PropTypes.shape({
            'first_name': React.PropTypes.string,
            'last_name': React.PropTypes.string
        }),
        'created_on': React.PropTypes.string,
        message: React.PropTypes.string
    }),
    errors: React.PropTypes.object,
    authenticated: React.PropTypes.bool,
    routeParams: React.PropTypes.shape({
        slug: React.PropTypes.string.isRequired
    }),
    onGetPost: React.PropTypes.func,
    onAddComment: React.PropTypes.func
};

export default Post;