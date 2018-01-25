import React from 'react';
import { shallow } from 'enzyme';

import AuthDashboard from './AuthDashboard';

describe('<AuthDashboard />', () => {
  let wrapper;
  const location = {
    pathname: '/register'
  };

  beforeEach(() => {
    wrapper = shallow(<AuthDashboard location={location} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });
});