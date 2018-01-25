import React from 'react';
import { object } from 'prop-types';

import Header from './common/Header';

Layout.propTypes = {
  children: object
};

function Layout(props) {
  return (
    <div>
      <Header />
      { props.children }
    </div>
  );
}

export default Layout;