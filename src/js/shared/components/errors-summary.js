import React from 'react';
import {Alert, Glyphicon} from 'react-bootstrap';


const Summary = ({errors}) => {
    if (!errors) {
        return null;
    }

    errors = errors.__ERROR__;
    if (!errors) {
        return null;
    }

    if (Array.isArray(errors)) {
        errors = errors[errors.length - 1];
    }

    return (
        <Alert bsStyle="danger">
            <Glyphicon glyph="exclamation-sign" /> {errors}
        </Alert>
    );
};

Summary.propTypes = {
    errors: React.PropTypes.shape({
        __ERROR__: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string)
        ])
    })
};

export default Summary;