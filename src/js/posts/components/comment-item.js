import React from 'react';

import Media from '../../shared/components/media';
import {formatDateOrTime} from '../../shared/utils';


const CommentItem = ({item}) => {
    const gravatarUrl = 'http://www.gravatar.com/avatar/' +
                        item.author.gravatar_hash + '?s=64&d=identicon';
    const heading = (
            <div>
                {item.author.first_name } {item.author.last_name} <small>
                    {formatDateOrTime(item.created_on)}
                </small>
            </div>
        );

    return (
        <Media src={gravatarUrl} heading={heading}>
            <p className={!item.moderated ? 'text-dim' : null}>
                {item.message}
            </p>
        </Media>
    );
};

CommentItem.propTypes = {
    item: React.PropTypes.shape({
        author: React.PropTypes.shape({
            'gravatar_hash': React.PropTypes.string,
            'first_name': React.PropTypes.string,
            'last_name': React.PropTypes.string
        }),
        'created_on': React.PropTypes.string,
        moderated: React.PropTypes.bool,
        message: React.PropTypes.string
    })
};

export default CommentItem;