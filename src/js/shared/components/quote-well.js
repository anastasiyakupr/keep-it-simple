import React from 'react';
import PropTypes from 'prop-types';
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
    quote: PropTypes.shape({
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }),
};

export default QuoteWell;