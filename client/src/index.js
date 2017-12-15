import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async() => {
    console.log('called');
    const users = await axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`);
    this.setState(() => { return { users: users.data.data.users }; });
    console.log(users.data.data.users);
  }

  render() {
    return (
      <div>
        <h1>Hi there</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));