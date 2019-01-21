import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Register';

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

describe('Register', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Register debug />);
  
    expect(component).toMatchSnapshot();
  });
});