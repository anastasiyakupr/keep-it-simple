import React from 'react';
import {HelpBlock} from 'react-bootstrap';


const Field = ({errors}) => {
    if (!errors) {
        return null;
    }

    if (Array.isArray(errors)) {
        errors = errors[errors.length - 1];
    }

    return (
        <HelpBlock>{errors}</HelpBlock>
    );
};

Field.propTypes = {
    errors: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.arrayOf(React.PropTypes.string)
    ])
};

export default Field;