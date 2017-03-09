import React from 'react';
import {shallow} from 'enzyme';

import AccessWarn from './access-warn';


describe('membership component access-warn', () => {
    it('renders self', () => {
        const c = shallow(
            <AccessWarn />
        );

        expect(c.find('hr')).toHaveLength(1);
    });
});