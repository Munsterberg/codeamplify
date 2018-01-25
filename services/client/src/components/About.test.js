import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

describe('<About />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render h1 text', () => {
    const elem = wrapper.find('h1');
    expect(elem.length).toBe(1);
    expect(elem.text()).toBe('About Page');
  });
});