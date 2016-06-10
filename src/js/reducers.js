import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import membership from './membership/reducers';
import posts from './posts/reducers';
import shared from './shared/reducers';


export default combineReducers({membership, posts, shared, routing});