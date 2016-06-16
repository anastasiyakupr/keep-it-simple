import React from 'react';
import {HelpBlock} from 'react-bootstrap';


class ErrorsField extends React.Component {
    render() {
        let errors = this.props.errors || this.context.errors;

        if (!errors) {
            return null;
        }

        errors = errors[this.props.name];
        if (!errors) {
            return null;
        }

        if (Array.isArray(errors)) {
            errors = errors[errors.length - 1];
        }

        return (
            <HelpBlock>{errors}</HelpBlock>
        );
    }
}

ErrorsField.propTypes = {
    name: React.PropTypes.string.isRequired,
    errors: React.PropTypes.object
};

ErrorsField.contextTypes = {
    errors: ErrorsField.propTypes.errors
};

export default ErrorsField;