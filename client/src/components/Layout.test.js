import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

describe('<Layout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout></Layout>);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render children when passed', () => {
    wrapper = shallow(<Layout><div>test</div></Layout>);
    expect(wrapper.contains(<div>test</div>));
  });
});