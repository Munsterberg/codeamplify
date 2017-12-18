import React from 'react';
import { object } from 'prop-types';

Layout.propTypes = {
  children: object
};

function Layout(props) {
  return (
    <div>
      { props.children }
    </div>
  );
}

export default Layout;