import React from 'react';
import {Pager, PageItem} from 'react-bootstrap';


const Paging = ({pending, paging, onSelect}) => {
    let newer, older;

    if (!paging) {
        return null;
    }

    if (paging.before !== undefined) {
        newer = (
            <PageItem previous disabled={pending}
                      eventKey={paging.before}>
                &larr; Newer
            </PageItem>
        );
    }

    if (paging.after !== undefined) {
        older = (
            <PageItem next disabled={pending}
                      eventKey={paging.after}>
                Older &rarr;
            </PageItem>
        );
    }

    if (!newer && !older) {
        return null;
    }

    return (
        <Pager onSelect={onSelect}>
            {newer}
            {older}
        </Pager>
    );
};

Paging.propTypes = {
    pending: React.PropTypes.bool,
    paging: React.PropTypes.shape({
        before: React.PropTypes.number,
        after: React.PropTypes.number
    }),
    onSelect: React.PropTypes.func
};

Paging.defaultProps = {
    pending: false,
    paging: {}
};

export default Paging;