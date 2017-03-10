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
});