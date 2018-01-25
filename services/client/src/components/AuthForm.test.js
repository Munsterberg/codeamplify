import React from 'react';
import { shallow } from 'enzyme';

import AuthForm from './AuthForm';

describe('<AuthForm />', () => {
  const formData = {
    username: '',
    email: '',
    password: ''
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AuthForm formData={formData} formType={'Register'} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render h1 for register form', () => {
    const h1Tag = wrapper.find('h1');
    expect(h1Tag.length).toBe(1);
    expect(h1Tag.get(0).props.children).toBe('Register');
  });

  it('should render register form components', () => {
    const formGroup = wrapper.find('.form-group');
    expect(formGroup.length).toBe(3);
  });

  it('should render h1 for login form', () => {
    wrapper = shallow(<AuthForm formData={formData} formType={'Login'} />);
    const h1Tag = wrapper.find('h1');
    expect(h1Tag.length).toBe(1);
    expect(h1Tag.get(0).props.children).toBe('Login');
  });

  it('should render login form components', () => {
    wrapper = shallow(<AuthForm formData={formData} formType={'Login'} />);
    const formGroup = wrapper.find('.form-group');
    expect(formGroup.length).toBe(2);
  });
});