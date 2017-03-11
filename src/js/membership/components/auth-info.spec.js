import React from 'react';
import {shallow} from 'enzyme';

import AuthInfo from './auth-info';


const initialProps = {
    show: false,
    onSignout: () => {}
};

describe('membership component', () => {
    describe('auth-info', () => {
        it('is not rendered if not shown', () => {
            const props = Object.assign({}, initialProps);

            const c = shallow(
                <AuthInfo {...props} />
            );

            expect(c.node).toBeNull();
        });
    });
});