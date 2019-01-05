import React from 'react';
import { shallow } from 'enzyme';

import LoginComponent from './LoginComponent';

describe('LoginComponent', () => {
    test('rendering the simple component', () => {
        const wrapper = shallow(
            <LoginComponent />
        );

        expect(wrapper).toMatchSnapshot();
    })
})