import React from 'react';
import {Link} from 'react-router';
import {Well, FormGroup, FormControl, Button} from 'react-bootstrap';

import Errors from '../../shared/components/errors';
import Layout from '../../shared/components/layout';
import SignInWell from '../../shared/components/signin-well';
import AccessWarn from './access-warn';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getChildContext() {
        return {errors: this.props.errors};
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this);
        this.props.onSubmit({
            email: this.email.value,
            username: this.username.value,
            password: this.password.value,
            'confirm_password': this.confirmPassword.value
        });
    }

    render() {
        const {pending, errors = {}} = this.props.pending;

        return (
            <Layout sidebar={<SignInWell/>}>
                <h1>Sign Up</h1>
                <p>
                    Already got an account? <Link to="/signin">Sign in</Link>,
                    please.
                </p>
                <hr/>
                <Errors.Summary />
                <Well>
                    <form autoComplete="off"
                          onSubmit={!pending && this.handleSubmit}>
                        <FormGroup validationState={errors.email && 'error'}>
                            <FormControl
                                inputRef={ref => { this.email = ref; }}
                                placeholder="Email" type="text" />
                            <FormControl.Feedback />
                            <Errors.Field name="email" />
                        </FormGroup>
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
                        <FormGroup validationState={
                                errors.confirm_password && 'error'}>
                            <FormControl inputRef={
                                    ref => { this.confirmPassword = ref; }}
                                placeholder="Confirm Password"
                                type="confirm_password" />
                            <FormControl.Feedback />
                            <Errors.Field name="confirm_password" />
                        </FormGroup>
                        <Button disabled={pending} bsStyle="primary"
                                type="submit">
                            Sign Up
                        </Button>
                    </form>
                </Well>
                <AccessWarn />
            </Layout>
        );
    }
}

SignUp.propTypes = {
    pending: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

SignUp.childContextTypes = {
    errors: SignUp.propTypes.errors
};

export default SignUp;