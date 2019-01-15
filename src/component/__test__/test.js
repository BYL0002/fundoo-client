import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginComponent from '../LoginComponent';

// describe what we are testing
describe('Login Component', () => {

    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(shallow(<LoginComponent />).find('form.login').exists()).toBe(true)
    })
})