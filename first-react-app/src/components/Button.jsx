// src/components/Button.js
import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, style }) => {
  return (
    <button style={style} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
