import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Layout from './components/Layout';
import AddUser from './components/AddUser';

class App extends Component {
  state = {
    users: []
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
    const response = await axios.get('http://192.168.99.100/users');
    this.setState(() => { return  { users: response.data.data.users }; });
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

ReactDOM.render(<Layout><App /></Layout>, document.getElementById('root'));
