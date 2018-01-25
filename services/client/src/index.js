import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './App';
import Layout from './components/Layout';
import AboutContainer from './containers/AboutContainer';
import AuthDashboard from './components/AuthDashboard';

const store = configureStore();

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={App} exact />
          <Route path='/about' component={AboutContainer} />
          <Route path='/register' component={AuthDashboard} />
          <Route path='/login' component={AuthDashboard} />
        </Switch>
      </Layout>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);