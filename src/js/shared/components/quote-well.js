import React from 'react';
import {Well} from 'react-bootstrap';


const QuoteWell = ({quote}) => {
    if (!quote) {
        return null;
    }

    return (
        <Well>
            <h4>Quote of the Day</h4>
            <p>
                <q>{quote.message}</q>
                <i> — {quote.author}</i>
            </p>
        </Well>
    );
};

QuoteWell.propTypes = {
    quote: React.PropTypes.shape({
        message: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired
    }),
};

export default QuoteWell;