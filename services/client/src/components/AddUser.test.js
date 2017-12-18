import React from 'react';
import { shallow, mount } from 'enzyme';

import AddUser from './AddUser';

describe('<AddUser />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddUser />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
  });

  it('should render form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should contain proper inputs', () => {
    const elem = wrapper.find('form');
    expect(elem.find('input').get(0).props.name).toBe('username');
    expect(elem.find('input').get(1).props.name).toBe('email');
    expect(elem.find('button').length).toBe(1);
  });

  it('should call handleChange', () => {
    const instance = wrapper.instance();
    instance.handleChange({ target: { name: 'username', value: 'myuser' } });
    expect(wrapper.state().username).toBe('myuser');
  });

  it('should call onSubmit', () => {
    const addUser = jest.fn();
    const preventDefault = jest.fn();
    wrapper = shallow(<AddUser addUser={addUser} />);
    wrapper.setState({ username: 'test', email: 'test@test.com' });
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(addUser).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});