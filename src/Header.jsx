import React, { PropTypes } from 'react';

// Stateless component or pure component
const Header = ({
  title,
}) => (
  <div className="header">
    <h1>{title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header
