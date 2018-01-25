import React, { Component } from 'react';
import axios from 'axios';
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

  handleChange = (e) => {
    const obj = this.state.formData;
    obj[e.target.name] = e.target.value;
    this.setState(() => ({ formData: obj }));
  }

  handleFormSubmit = async(e) => {
    e.preventDefault();
    const formType = window.location.href.split('/').reverse()[0];
    const data = {
      username: this.state.formData.username,
      password: this.state.formData.password
    };
    if (formType === 'register') data.email = this.state.formData.email;
    const url = `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/${formType}`;
    const tempUrl = `http://192.168.99.100/auth/${formType}`;
    const responseData = await axios.post(tempUrl, data);
    console.log(responseData);
  }

  render() {
    const { formData } = this.state;
    const formType = this.props.location.pathname === '/register' ? 'Register' : 'Login';
    return (
      <AuthForm
        formData={formData}
        formType={formType}
        handleChange={this.handleChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default AuthDashboard;