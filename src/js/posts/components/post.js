import React from 'react';
import {Glyphicon} from 'react-bootstrap';

import Layout from '../../shared/components/layout';
import LeadBreak from '../../shared/components/lead-break';
import {formatDateOrTime} from '../../shared/utils';


class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {onGetPost} = this.props;

        if (onGetPost) {
            onGetPost(this.props.routeParams.slug);
        }
    }

    render() {
        const {post} = this.props;

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
            </Layout>
        );
    }
}

Post.propTypes = {
    post: React.PropTypes.shape({
        title: React.PropTypes.string,
        author: React.PropTypes.shape({
            'first_name': React.PropTypes.string,
            'last_name': React.PropTypes.string
        }),
        'created_on': React.PropTypes.string,
        message: React.PropTypes.string
    }),
    routeParams: React.PropTypes.shape({
        slug: React.PropTypes.string.isRequired
    }),
    onGetPost: React.PropTypes.func
};

export default Post;