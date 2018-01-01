import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Layout from './components/Layout';
import About from './components/About';

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={App} exact />
          <Route path='/about' component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));