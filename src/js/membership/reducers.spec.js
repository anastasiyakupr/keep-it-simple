import {LOCATION_CHANGE} from 'react-router-redux';

import reducers from './reducers';
import * as types from './constants';


describe('membership reducers', () => {
    it('returns the initial state', () => {
        [
            reducers(undefined, {}),
            reducers({
                auth: {}
            }, {
                type: types.SIGN_OUT_REQUEST
            })
        ].forEach(r => expect(r).toEqual({
            auth: {
                errors: {},
                pending: false,
                user: null
            }
        }));
    });

    it('handles location change', () => {
        expect(reducers({
            auth: {}
        }, {
            type: LOCATION_CHANGE
        })).toEqual({
            auth: {
                errors: {}
            }
        });
    });

    it('handles pending request', () => {
        [
            types.SIGN_IN_REQUEST,
            types.SIGN_UP_REQUEST
        ].forEach(type => {
            expect(reducers({
                auth: {}
            }, {
                type: type
            })).toEqual({
                auth: {
                    pending: true
                }
            });
        });
    });
});