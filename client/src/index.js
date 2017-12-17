import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async() => {
    const response = await axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`);
    this.setState(() => { return  { users: response.data.data.users }; });
  }

  render() {
    return (
      <div>
        hi there
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
