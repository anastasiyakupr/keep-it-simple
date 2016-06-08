import {connect} from 'react-redux';

import {signout} from '../actions';
import Header from '../components/header';


export default connect(
    state => ({
        user: state.user,
        showSignin: state.routing.locationBeforeTransitions.pathname.match(
            /^\/?signin$/) === null
    }),
    dispatch => ({
        onSignout: () => dispatch(signout())
    })
)(Header);