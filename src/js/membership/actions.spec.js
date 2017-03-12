import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import * as types from './constants';


const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('membership actions', () => {
    describe('signin', () => {
        it('responds with validation error', () => {
            const store = mockStore({});

            return store.dispatch(actions.signin()).then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: types.SIGN_IN_REQUEST
                    },
                    {
                        type: types.SIGN_IN_FAILURE,
                        errors: {
                            password: [
                                'Required field can not be left bank.'
                            ],
                            username: [
                                'Required field can not be left bank.'
                            ]
                        }
                    }
                ]);
            });
        });

        it('rejects invalid user', () => {
            const store = mockStore({});

            return store.dispatch(actions.signin({
                username: 'test',
                password: 'invalid'
            })).then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: types.SIGN_IN_REQUEST
                    },
                    {
                        type: types.SIGN_IN_FAILURE,
                        errors: {
                            '__ERROR__': [
                                'The username or password provided ' +
                                'is incorrect.'
                            ]
                        }
                    }
                ]);
            });
        });
    });
});