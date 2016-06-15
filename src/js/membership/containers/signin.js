import {connect} from 'react-redux';

import {signin} from '../actions';
import SignIn from '../components/signin';


export default connect(
    state => {
        const auth = state.membership.auth;
        return ({
            pending: auth.pending,
            errors: auth.errors
        })
    },
    dispatch => ({
        onSubmit: (credentials) => dispatch(signin(credentials))
    })
)(SignIn);