import React, { PropTypes } from 'react';
import Stats from './Stats';

// Stateless component or pure component
const Header = ({
  title,
  players
}) => (
  <div className="header">
    <Stats players={players}/>
    <h1>{title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};

Header.defaultProps = {
  title: "ScoreBoard"
}
export default Header
