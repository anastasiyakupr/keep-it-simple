import React from 'react';
import ReactDOM from 'react-dom';
import {Well, FormGroup, FormControl, Button, Alert} from 'react-bootstrap';
import {Link} from 'react-router';

import Errors from '../../shared/components/errors';


class CommentWell extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getChildContext() {
        return {errors: this.props.errors};
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.onSubmit) {
            const m = ReactDOM.findDOMNode(this.refs.message).value.trim();

            if (m) {
                this.props.onSubmit(m);
            }
        }
    }

    render() {
        const {authenticated, permitted} = this.props;

        if (authenticated && !permitted) {
            return (
                <Alert bsStyle="warning">
                    There are too many of your comments awaiting moderation.
                    Come back later, please.
                </Alert>
            );
        }

        if (!authenticated) {
            return (
                <Well>
                    <h4>Leave a Comment:</h4>
                    <Link to="/signin">Sign in</Link>, please.
                    New comments are held for moderation.
                </Well>
            );
        }

        const {disabled, errors} = this.props;

        return (
            <div>
                <Errors.Summary />
                <Well>
                    <h4>Leave a Comment:</h4>
                    <form autoComplete="off"
                          onSubmit={!disabled && this.handleSubmit}>
                        <FormGroup validationState={errors.message && 'error'}>
                            <FormControl ref="message" rows="3"
                                         componentClass="textarea" />
                            <FormControl.Feedback />
                            <Errors.Field name="message" />
                        </FormGroup>
                        <Button disabled={disabled} bsStyle="primary"
                                type="submit">
                            Submit
                        </Button>
                    </form>
                </Well>
            </div>
        );
    }
}

CommentWell.propTypes = {
    authenticated: React.PropTypes.bool,
    permitted: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    errors: React.PropTypes.object,
    onSubmit: React.PropTypes.func
};

CommentWell.childContextTypes = {
    errors: CommentWell.propTypes.errors
};

export default CommentWell;