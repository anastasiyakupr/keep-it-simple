import {connect} from 'react-redux';

import {signup} from '../actions';
import SignUp from '../components/signup';


export default connect(
    state => {
        const auth = state.membership.auth;

        return {
            pending: auth.pending,
            errors: auth.errors
        };
    },
    dispatch => ({
        onSubmit: m => dispatch(signup(m))
    })
)(SignUp);