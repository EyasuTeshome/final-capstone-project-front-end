import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

const Container = ({ children }) => (
  <div>
    <div className="children">
      {children}
    </div>
    <div className="all">
      <Navbar />
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
