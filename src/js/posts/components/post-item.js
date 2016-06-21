import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap';

import {formatDateOrTime} from '../../shared/utils';


class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(this.props.item.slug);
        }
    }

    render() {
        const p = this.props.item,
            created = formatDateOrTime(p.created_on);

        return (
            <div>
                <h2>
                    <a href="" onClick={this.handleClick}>
                        {p.title}
                    </a>
                </h2>
                <p className="lead">
                    by {p.author.first_name} {p.author.last_name}
                </p>
                <p>
                    <Glyphicon glyph="time" /> Posted {created}
                </p>
                <hr/>
                <p>
                    {p.message}
                </p>
                <Button bsStyle="primary" onClick={this.handleClick}>
                    Read More <Glyphicon glyph="chevron-right" />
                </Button>
                <hr/>
            </div>
        );
    }
}

PostItem.propTypes = {
    item: React.PropTypes.shape({
        slug: React.PropTypes.string,
        title: React.PropTypes.string,
        author: React.PropTypes.shape({
            'first_name': React.PropTypes.string,
            'last_name': React.PropTypes.string
        }),
        'created_on': React.PropTypes.string,
        message: React.PropTypes.string,
    }),
    onClick: React.PropTypes.func
};

export default PostItem;