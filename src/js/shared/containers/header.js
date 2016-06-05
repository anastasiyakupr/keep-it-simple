import {connect} from 'react-redux';

import {signin, signout} from '../actions';
import Header from '../components/header';


export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        onSignin: () => dispatch(signin()),
        onSignout: () => dispatch(signout())
    })
)(Header);