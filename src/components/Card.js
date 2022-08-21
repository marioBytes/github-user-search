import React from 'react';
import propTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card shadow">
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired,
};

export default Card;
