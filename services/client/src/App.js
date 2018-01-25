import React, { Component } from 'react';
import axios from 'axios';
import { bool, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActionCreators from './actions/users';
import AddUser from './components/AddUser';

class App extends Component {
  static propTypes = {
    isFetching: bool.isRequired,
    error: string.isRequired,
    fetchUsers: func.isRequired,
    fetchingUsers: func.isRequired,
    fetchingUsersFailure: func.isRequired,
    fetchingUsersSuccess: func.isRequired
  }

  componentDidMount() {
    this.getUsers();
  }

  addUser = async(userObj) => {
    const response = await axios.post('http://192.168.99.100/users', userObj);
    this.getUsers();
    console.log(response);
  }

  getUsers = async() => {
    this.props.fetchingUsers();
    try {
      const response = await axios.get('http://192.168.99.100/users');
      this.props.fetchingUsersSuccess(response.data.data.users);
    } catch(e) {
      this.props.fetchingUsersFailure(e);
    }
  }

  render() {
    return (
      <div>
        <h1>Hi there</h1>
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.users.isFetching,
    error: state.users.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);