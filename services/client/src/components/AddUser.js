import React, { Component } from 'react';
import { func } from 'prop-types';

class AddUser extends Component {
  state = {
    username: '',
    email: ''
  }

  static propTypes = {
    addUser: func
  };

  handleChange = (e) => {
    const elem = e.target;
    const stateObj = {};

    stateObj[elem.name] = elem.value;
    this.setState(() => (stateObj));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addUser({
      username: this.state.username,
      email: this.state.email
    });
  }

  render() {
    const { username, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          required
        />
        <input
          onChange={this.handleChange}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default AddUser;