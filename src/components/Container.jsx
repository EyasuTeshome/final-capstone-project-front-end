import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

const Container = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
