import React from 'react';
import ReactDOM from 'react-dom';
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            username: ReactDOM.findDOMNode(this.refs.username).value,
            password: ReactDOM.findDOMNode(this.refs.password).value
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
                <Errors.Summary errors={errors} />
                <Well>
                    <form autoComplete="off"
                          onSubmit={!pending && this.handleSubmit}>
                        <FormGroup validationState={errors.username && 'error'}>
                            <FormControl ref="username" placeholder="Username"
                               type="text" />
                            <FormControl.Feedback />
                            <Errors.Field errors={errors.username} />
                        </FormGroup>
                        <FormGroup validationState={errors.password && 'error'}>
                            <FormControl ref="password" placeholder="Password"
                               type="password" />
                            <FormControl.Feedback />
                            <Errors.Field errors={errors.password} />
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
    pending: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default SignIn;