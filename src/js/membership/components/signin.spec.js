import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {shallow} from 'enzyme';

import SignIn from './signin';


const setup = (overrides, state) => {
    const props = Object.assign({
        pending: false,
        errors: {},
        onSubmit: () => {}
    }, overrides);

    if (!state) {
        return props;
    }

    return {
        props,
        options: {
            context: {
                store: {
                    subscribe: () => {},
                    dispatch: () => {},
                    getState: () => state
                }
            },
            childContextTypes: {
                store: PropTypes.object.isRequired
            }
        }
    };
};

describe('membership component', () => {
    describe('signin', () => {
        it('renders correctly', () => {
            const props = setup();

            const c = shallow(<SignIn {...props} />);

            expect(c.find(Button).props().disabled).toBe(false);
            expect(c.find('form').props().onSubmit).toBeInstanceOf(Function);
        });
    });
});