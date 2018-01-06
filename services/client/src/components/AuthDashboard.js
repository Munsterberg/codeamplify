import React, { Component } from 'react';
import { object } from 'prop-types';

import AuthForm from './AuthForm';

class AuthDashboard extends Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: ''
    }
  }

  static propTypes = {
    location: object,
  }

  render() {
    const { formData } = this.state;
    const formType = this.props.location.pathname === '/register' ? 'Register' : 'Login';
    return (
      <AuthForm formData={formData} formType={formType} />
    );
  }
}

export default AuthDashboard;