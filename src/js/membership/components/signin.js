import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Well, FormGroup, FormControl, Button} from 'react-bootstrap';

import Errors from '../../shared/components/errors';
import Layout from '../../shared/components/layout';
import SignUpWell from '../../shared/components/signup-well';
import AccessWarn from './access-warn';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getChildContext() {
        return {errors: this.props.errors};
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            username: this.username.value,
            password: this.password.value
        });
    }

    render() {
        const {pending, errors} = this.props;

        return (
            <Layout sidebar={<SignUpWell/>}>
                <h1>Sign In</h1>
                <p>
                    Need an account? <Link to="/signup">Sign up</Link> free.
                    Your opinions and comments would be greatly
                    appreciated.
                </p>
                <hr/>
                <Errors.Summary />
                <Well>
                    <form autoComplete="off"
                          onSubmit={!pending && this.handleSubmit}>
                        <FormGroup validationState={errors.username && 'error'}>
                            <FormControl
                                inputRef={ref => { this.username = ref; }}
                                placeholder="Username" type="text" />
                            <FormControl.Feedback />
                            <Errors.Field name="username" />
                        </FormGroup>
                        <FormGroup validationState={errors.password && 'error'}>
                            <FormControl
                                inputRef={ref => { this.password = ref; }}
                                placeholder="Password" type="password" />
                            <FormControl.Feedback />
                            <Errors.Field name="password" />
                        </FormGroup>
                        <Button disabled={pending} bsStyle="primary"
                                type="submit">
                            Sign In
                        </Button>
                    </form>
                </Well>
                <AccessWarn />
            </Layout>
        );
    }
}

SignIn.propTypes = {
    pending: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

SignIn.childContextTypes = {
    errors: SignIn.propTypes.errors
};

export default SignIn;