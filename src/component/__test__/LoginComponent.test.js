import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../LoginComponent';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginComponent debug />);
  
    expect(component).toMatchSnapshot();
  });
});